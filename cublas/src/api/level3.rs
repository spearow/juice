use ::{API, Error};
use super::Context;
use super::Operation;
use ffi::*;

impl API {
    /// Performs a general matrix-matrix multiplication.
    ///
    /// Note: the matrices are expected to be ordered column-major (FORTRAN-style).
    pub fn gemm(context: &Context,
                        transa: Operation, transb: Operation,
                        m: i32, n: i32, k: i32,
                        alpha: *mut f32,
                        a: *mut f32, lda: i32,
                        b: *mut f32, ldb: i32,
                        beta: *mut f32,
                        c: *mut f32, ldc: i32) -> Result<(), Error> {
        unsafe { Self::ffi_sgemm(*context.id_c(), transa.as_c(), transb.as_c(), m, n, k, alpha, a, lda, b, ldb, beta, c, ldc) }
    }

    /// Note: the matrices are expected to be ordered column-major (FORTRAN-style).
    unsafe fn ffi_sgemm(handle: cublasHandle_t,
                        transa: cublasOperation_t, transb: cublasOperation_t,
                        m: i32, n: i32, k: i32,
                        alpha: *mut f32,
                        a: *mut f32, lda: i32,
                        b: *mut f32, ldb: i32,
                        beta: *mut f32,
                        c: *mut f32, ldc: i32) -> Result<(), Error> {
        match cublasSgemm_v2(handle, transa, transb, m, n, k, alpha, a, lda, b, ldb, beta, c, ldc) {
            cublasStatus_t::CUBLAS_STATUS_SUCCESS => Ok(()),
            cublasStatus_t::CUBLAS_STATUS_NOT_INITIALIZED => Err(Error::NotInitialized),
            cublasStatus_t::CUBLAS_STATUS_INVALID_VALUE => Err(Error::InvalidValue("m, n, or k < 0")),
            cublasStatus_t::CUBLAS_STATUS_ARCH_MISMATCH => Err(Error::ArchMismatch),
            cublasStatus_t::CUBLAS_STATUS_EXECUTION_FAILED => Err(Error::ExecutionFailed),
            _ => Err(Error::Unknown("Unable to calculate axpy (alpha * x + y).")),
        }
    }
}

#[cfg(test)]
mod test {
    use ffi::*;
    use ::API;
    use ::api::context::Context;
    use ::api::enums::PointerMode;
    use co::backend::{Backend, IBackend, BackendConfig};
    use co::framework::IFramework;
    use co::frameworks::{Cuda, Native};
    use co::tensor::SharedTensor;
    use co::memory::MemoryType;

    fn get_native_backend() -> Backend<Native> {
        let framework = Native::new();
        let hardwares = framework.hardwares();
        let backend_config = BackendConfig::new(framework, hardwares);
        Backend::new(backend_config).unwrap()
    }

    fn get_cuda_backend() -> Backend<Cuda> {
        let framework = Cuda::new();
        let hardwares = framework.hardwares();
        let backend_config = BackendConfig::new(framework, hardwares);
        Backend::new(backend_config).unwrap()
    }

    fn write_to_memory<T: Copy>(mem: &mut MemoryType, data: &[T]) {
        if let &mut MemoryType::Native(ref mut mem) = mem {
            let mut mem_buffer = mem.as_mut_slice::<T>();
            for (index, datum) in data.iter().enumerate() {
                mem_buffer[index] = *datum;
            }
        }
    }

    fn filled_tensor<B: IBackend, T: Copy>(backend: &B, n: usize, val: T) -> SharedTensor<T> {
        let mut x = SharedTensor::<T>::new(backend.device(), &vec![n]).unwrap();
        let values: &[T] = &::std::iter::repeat(val).take(x.capacity()).collect::<Vec<T>>();
        write_to_memory(x.get_mut(backend.device()).unwrap(), values);
        x
    }

    #[test]
    fn use_cuda_memory_for_gemm() {
        let native = get_native_backend();
        let cuda = get_cuda_backend();

        // set up alpha
        let mut alpha = filled_tensor(&native, 1, 1f32);
        alpha.add_device(cuda.device()).unwrap();
        alpha.sync(cuda.device()).unwrap();

        // set up beta
        let mut beta = filled_tensor(&native, 1, 0f32);
        beta.add_device(cuda.device()).unwrap();
        beta.sync(cuda.device()).unwrap();

        // set up a
        let mut a = SharedTensor::<f32>::new(native.device(), &vec![3, 2]).unwrap();
        write_to_memory(a.get_mut(native.device()).unwrap(),
            &[2f32, 5f32,
              2f32, 5f32,
              2f32, 5f32]);
        a.add_device(cuda.device()).unwrap();
        a.sync(cuda.device()).unwrap();

        // set up b
        let mut b = SharedTensor::<f32>::new(native.device(), &vec![2, 3]).unwrap();
        write_to_memory(b.get_mut(native.device()).unwrap(),
            &[4f32, 1f32, 1f32,
              4f32, 1f32, 1f32]);
        b.add_device(cuda.device()).unwrap();
        b.sync(cuda.device()).unwrap();

        // set up c
        let mut c = SharedTensor::<f32>::new(native.device(), &vec![3, 3]).unwrap();
        c.add_device(cuda.device()).unwrap();
        c.sync(cuda.device()).unwrap();

        {
            let transa = cublasOperation_t::CUBLAS_OP_N;
            let transb = cublasOperation_t::CUBLAS_OP_N;
            let m = 3;
            let n = 3;
            let k = 2;
            let lda = 2;
            let ldb = 3;
            let ldc = 3;
            let cuda_mem_alpha = alpha.get(cuda.device()).unwrap().as_cuda().unwrap();
            let cuda_mem_beta = beta.get(cuda.device()).unwrap().as_cuda().unwrap();
            let cuda_mem_a = a.get(cuda.device()).unwrap().as_cuda().unwrap();
            let cuda_mem_b = b.get(cuda.device()).unwrap().as_cuda().unwrap();
            let cuda_mem_c = c.get(cuda.device()).unwrap().as_cuda().unwrap();
            let mut ctx = Context::new().unwrap();
            ctx.set_pointer_mode(PointerMode::Device).unwrap();
            unsafe {
                let alpha_addr = ::std::mem::transmute::<u64, *mut f32>(*cuda_mem_alpha.id_c());
                let beta_addr = ::std::mem::transmute::<u64, *mut f32>(*cuda_mem_beta.id_c());
                let a_addr = ::std::mem::transmute::<u64, *mut f32>(*cuda_mem_a.id_c());
                let b_addr = ::std::mem::transmute::<u64, *mut f32>(*cuda_mem_b.id_c());
                let c_addr = ::std::mem::transmute::<u64, *mut f32>(*cuda_mem_c.id_c());
                API::ffi_sgemm(*ctx.id_c(), transa, transb, m, n, k, alpha_addr, b_addr, ldb, a_addr, lda, beta_addr, c_addr, ldc).unwrap();
           }
       }

       c.sync(native.device()).unwrap();
       let native_c = c.get(native.device()).unwrap().as_native().unwrap();
       assert_eq!(&[28f32, 7f32, 7f32, 28f32, 7f32, 7f32, 28f32, 7f32, 7f32], native_c.as_slice::<f32>());
    }
}
