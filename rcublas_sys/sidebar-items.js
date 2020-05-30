initSidebarItems({"constant":[["CUBLAS_VERSION",""],["CUBLAS_VER_BUILD",""],["CUBLAS_VER_MAJOR",""],["CUBLAS_VER_MINOR",""],["CUBLAS_VER_PATCH",""],["libraryPropertyType_t_MAJOR_VERSION",""],["libraryPropertyType_t_MINOR_VERSION",""],["libraryPropertyType_t_PATCH_LEVEL",""]],"enum":[["cublasAtomicsMode_t",""],["cublasDataType_t",""],["cublasDiagType_t",""],["cublasFillMode_t",""],["cublasGemmAlgo_t",""],["cublasMath_t",""],["cublasOperation_t",""],["cublasPointerMode_t",""],["cublasSideMode_t",""],["cublasStatus_t",""],["cudaCGScope","CUDA cooperative group scope"],["cudaChannelFormatKind","Channel format kind"],["cudaComputeMode","CUDA device compute modes"],["cudaDataType",""],["cudaDataType_t",""],["cudaDeviceAttr","CUDA device attributes"],["cudaDeviceP2PAttr","CUDA device P2P attributes"],["cudaError","CUDA error types"],["cudaError_t","CUDA error types"],["cudaExternalMemoryHandleType","External memory handle types"],["cudaExternalSemaphoreHandleType","External semaphore handle types"],["cudaFuncAttribute","CUDA function attributes that can be set using ::cudaFuncSetAttribute"],["cudaFuncCache","CUDA function cache configurations"],["cudaGraphExecUpdateResult","CUDA Graph Update error types"],["cudaGraphNodeType","CUDA Graph node types"],["cudaGraphicsCubeFace","CUDA graphics interop array indices for cube maps"],["cudaGraphicsMapFlags","CUDA graphics interop map flags"],["cudaGraphicsRegisterFlags","CUDA graphics interop register flags"],["cudaLimit","CUDA Limits"],["cudaMemRangeAttribute","CUDA range attributes"],["cudaMemcpyKind","CUDA memory copy types"],["cudaMemoryAdvise","CUDA Memory Advise values"],["cudaMemoryType","CUDA memory types"],["cudaOutputMode","CUDA Profiler Output modes"],["cudaOutputMode_t","CUDA Profiler Output modes"],["cudaResourceType","CUDA resource types"],["cudaResourceViewFormat","CUDA texture resource view formats"],["cudaSharedCarveout","Shared memory carveout configurations. These may be passed to cudaFuncSetAttribute"],["cudaSharedMemConfig","CUDA shared memory configuration"],["cudaStreamCaptureMode","Possible modes for stream capture thread interactions. For more details see ::cudaStreamBeginCapture and ::cudaThreadExchangeStreamCaptureMode"],["cudaStreamCaptureStatus","Possible stream capture statuses returned by ::cudaStreamIsCapturing"]],"fn":[["cublasAsumEx",""],["cublasAxpyEx",""],["cublasCaxpy_v2",""],["cublasCcopy_v2",""],["cublasCdgmm",""],["cublasCdotc_v2",""],["cublasCdotu_v2",""],["cublasCgbmv_v2",""],["cublasCgeam",""],["cublasCgelsBatched",""],["cublasCgemm3m",""],["cublasCgemm3mBatched",""],["cublasCgemm3mEx",""],["cublasCgemm3mStridedBatched",""],["cublasCgemmBatched",""],["cublasCgemmEx",""],["cublasCgemmStridedBatched",""],["cublasCgemm_v2",""],["cublasCgemv_v2",""],["cublasCgeqrfBatched",""],["cublasCgerc_v2",""],["cublasCgeru_v2",""],["cublasCgetrfBatched",""],["cublasCgetriBatched",""],["cublasCgetrsBatched",""],["cublasChbmv_v2",""],["cublasChemm_v2",""],["cublasChemv_v2",""],["cublasCher2_v2",""],["cublasCher2k_v2",""],["cublasCher_v2",""],["cublasCherk3mEx",""],["cublasCherkEx",""],["cublasCherk_v2",""],["cublasCherkx",""],["cublasChpmv_v2",""],["cublasChpr2_v2",""],["cublasChpr_v2",""],["cublasCmatinvBatched",""],["cublasCopyEx",""],["cublasCreate_v2",""],["cublasCrot_v2",""],["cublasCrotg_v2",""],["cublasCscal_v2",""],["cublasCsrot_v2",""],["cublasCsscal_v2",""],["cublasCswap_v2",""],["cublasCsymm_v2",""],["cublasCsymv_v2",""],["cublasCsyr2_v2",""],["cublasCsyr2k_v2",""],["cublasCsyr_v2",""],["cublasCsyrk3mEx",""],["cublasCsyrkEx",""],["cublasCsyrk_v2",""],["cublasCsyrkx",""],["cublasCtbmv_v2",""],["cublasCtbsv_v2",""],["cublasCtpmv_v2",""],["cublasCtpsv_v2",""],["cublasCtpttr",""],["cublasCtrmm_v2",""],["cublasCtrmv_v2",""],["cublasCtrsmBatched",""],["cublasCtrsm_v2",""],["cublasCtrsv_v2",""],["cublasCtrttp",""],["cublasDasum_v2",""],["cublasDaxpy_v2",""],["cublasDcopy_v2",""],["cublasDdgmm",""],["cublasDdot_v2",""],["cublasDestroy_v2",""],["cublasDgbmv_v2",""],["cublasDgeam",""],["cublasDgelsBatched",""],["cublasDgemmBatched",""],["cublasDgemmStridedBatched",""],["cublasDgemm_v2",""],["cublasDgemv_v2",""],["cublasDgeqrfBatched",""],["cublasDger_v2",""],["cublasDgetrfBatched",""],["cublasDgetriBatched",""],["cublasDgetrsBatched",""],["cublasDmatinvBatched",""],["cublasDnrm2_v2",""],["cublasDotEx",""],["cublasDotcEx",""],["cublasDrot_v2",""],["cublasDrotg_v2",""],["cublasDrotm_v2",""],["cublasDrotmg_v2",""],["cublasDsbmv_v2",""],["cublasDscal_v2",""],["cublasDspmv_v2",""],["cublasDspr2_v2",""],["cublasDspr_v2",""],["cublasDswap_v2",""],["cublasDsymm_v2",""],["cublasDsymv_v2",""],["cublasDsyr2_v2",""],["cublasDsyr2k_v2",""],["cublasDsyr_v2",""],["cublasDsyrk_v2",""],["cublasDsyrkx",""],["cublasDtbmv_v2",""],["cublasDtbsv_v2",""],["cublasDtpmv_v2",""],["cublasDtpsv_v2",""],["cublasDtpttr",""],["cublasDtrmm_v2",""],["cublasDtrmv_v2",""],["cublasDtrsmBatched",""],["cublasDtrsm_v2",""],["cublasDtrsv_v2",""],["cublasDtrttp",""],["cublasDzasum_v2",""],["cublasDznrm2_v2",""],["cublasGemmBatchedEx",""],["cublasGemmEx",""],["cublasGemmStridedBatchedEx",""],["cublasGetAtomicsMode",""],["cublasGetCudartVersion",""],["cublasGetLoggerCallback",""],["cublasGetMathMode",""],["cublasGetMatrix",""],["cublasGetMatrixAsync",""],["cublasGetPointerMode_v2",""],["cublasGetProperty",""],["cublasGetStream_v2",""],["cublasGetVector",""],["cublasGetVectorAsync",""],["cublasGetVersion_v2",""],["cublasIamaxEx",""],["cublasIaminEx",""],["cublasIcamax_v2",""],["cublasIcamin_v2",""],["cublasIdamax_v2",""],["cublasIdamin_v2",""],["cublasIsamax_v2",""],["cublasIsamin_v2",""],["cublasIzamax_v2",""],["cublasIzamin_v2",""],["cublasLoggerConfigure",""],["cublasNrm2Ex",""],["cublasRotEx",""],["cublasRotgEx",""],["cublasRotmEx",""],["cublasRotmgEx",""],["cublasSasum_v2",""],["cublasSaxpy_v2",""],["cublasScalEx",""],["cublasScasum_v2",""],["cublasScnrm2_v2",""],["cublasScopy_v2",""],["cublasSdgmm",""],["cublasSdot_v2",""],["cublasSetAtomicsMode",""],["cublasSetLoggerCallback",""],["cublasSetMathMode",""],["cublasSetMatrix",""],["cublasSetMatrixAsync",""],["cublasSetPointerMode_v2",""],["cublasSetStream_v2",""],["cublasSetVector",""],["cublasSetVectorAsync",""],["cublasSgbmv_v2",""],["cublasSgeam",""],["cublasSgelsBatched",""],["cublasSgemmBatched",""],["cublasSgemmEx",""],["cublasSgemmStridedBatched",""],["cublasSgemm_v2",""],["cublasSgemv_v2",""],["cublasSgeqrfBatched",""],["cublasSger_v2",""],["cublasSgetrfBatched",""],["cublasSgetriBatched",""],["cublasSgetrsBatched",""],["cublasSmatinvBatched",""],["cublasSnrm2_v2",""],["cublasSrot_v2",""],["cublasSrotg_v2",""],["cublasSrotm_v2",""],["cublasSrotmg_v2",""],["cublasSsbmv_v2",""],["cublasSscal_v2",""],["cublasSspmv_v2",""],["cublasSspr2_v2",""],["cublasSspr_v2",""],["cublasSswap_v2",""],["cublasSsymm_v2",""],["cublasSsymv_v2",""],["cublasSsyr2_v2",""],["cublasSsyr2k_v2",""],["cublasSsyr_v2",""],["cublasSsyrk_v2",""],["cublasSsyrkx",""],["cublasStbmv_v2",""],["cublasStbsv_v2",""],["cublasStpmv_v2",""],["cublasStpsv_v2",""],["cublasStpttr",""],["cublasStrmm_v2",""],["cublasStrmv_v2",""],["cublasStrsmBatched",""],["cublasStrsm_v2",""],["cublasStrsv_v2",""],["cublasStrttp",""],["cublasSwapEx",""],["cublasUint8gemmBias",""],["cublasXerbla",""],["cublasZaxpy_v2",""],["cublasZcopy_v2",""],["cublasZdgmm",""],["cublasZdotc_v2",""],["cublasZdotu_v2",""],["cublasZdrot_v2",""],["cublasZdscal_v2",""],["cublasZgbmv_v2",""],["cublasZgeam",""],["cublasZgelsBatched",""],["cublasZgemm3m",""],["cublasZgemmBatched",""],["cublasZgemmStridedBatched",""],["cublasZgemm_v2",""],["cublasZgemv_v2",""],["cublasZgeqrfBatched",""],["cublasZgerc_v2",""],["cublasZgeru_v2",""],["cublasZgetrfBatched",""],["cublasZgetriBatched",""],["cublasZgetrsBatched",""],["cublasZhbmv_v2",""],["cublasZhemm_v2",""],["cublasZhemv_v2",""],["cublasZher2_v2",""],["cublasZher2k_v2",""],["cublasZher_v2",""],["cublasZherk_v2",""],["cublasZherkx",""],["cublasZhpmv_v2",""],["cublasZhpr2_v2",""],["cublasZhpr_v2",""],["cublasZmatinvBatched",""],["cublasZrot_v2",""],["cublasZrotg_v2",""],["cublasZscal_v2",""],["cublasZswap_v2",""],["cublasZsymm_v2",""],["cublasZsymv_v2",""],["cublasZsyr2_v2",""],["cublasZsyr2k_v2",""],["cublasZsyr_v2",""],["cublasZsyrk_v2",""],["cublasZsyrkx",""],["cublasZtbmv_v2",""],["cublasZtbsv_v2",""],["cublasZtpmv_v2",""],["cublasZtpsv_v2",""],["cublasZtpttr",""],["cublasZtrmm_v2",""],["cublasZtrmv_v2",""],["cublasZtrsmBatched",""],["cublasZtrsm_v2",""],["cublasZtrsv_v2",""],["cublasZtrttp",""]],"struct":[["CUevent_st",""],["CUexternalMemory_st",""],["CUexternalSemaphore_st",""],["CUgraphExec_st",""],["CUgraphNode_st",""],["CUgraph_st",""],["CUstream_st",""],["CUuuid_st",""],["cublasContext",""],["cudaArray",""],["cudaChannelFormatDesc","CUDA Channel format descriptor"],["cudaDeviceProp","CUDA device properties"],["cudaExtent","CUDA extent"],["cudaExternalMemoryBufferDesc","External memory buffer descriptor"],["cudaExternalMemoryHandleDesc","External memory handle descriptor"],["cudaExternalMemoryHandleDesc__bindgen_ty_1__bindgen_ty_1","Win32 handle referencing the semaphore object. Valid when type is one of the following: - ::cudaExternalMemoryHandleTypeOpaqueWin32 - ::cudaExternalMemoryHandleTypeOpaqueWin32Kmt - ::cudaExternalMemoryHandleTypeD3D12Heap - ::cudaExternalMemoryHandleTypeD3D12Resource - ::cudaExternalMemoryHandleTypeD3D11Resource - ::cudaExternalMemoryHandleTypeD3D11ResourceKmt Exactly one of 'handle' and 'name' must be non-NULL. If type is one of the following: ::cudaExternalMemoryHandleTypeOpaqueWin32Kmt ::cudaExternalMemoryHandleTypeD3D11ResourceKmt then 'name' must be NULL."],["cudaExternalMemoryMipmappedArrayDesc","External memory mipmap descriptor"],["cudaExternalSemaphoreHandleDesc","External semaphore handle descriptor"],["cudaExternalSemaphoreHandleDesc__bindgen_ty_1__bindgen_ty_1","Win32 handle referencing the semaphore object. Valid when type is one of the following: - ::cudaExternalSemaphoreHandleTypeOpaqueWin32 - ::cudaExternalSemaphoreHandleTypeOpaqueWin32Kmt - ::cudaExternalSemaphoreHandleTypeD3D12Fence - ::cudaExternalSemaphoreHandleTypeD3D11Fence - ::cudaExternalSemaphoreHandleTypeKeyedMutex Exactly one of 'handle' and 'name' must be non-NULL. If type is one of the following: ::cudaExternalSemaphoreHandleTypeOpaqueWin32Kmt ::cudaExternalSemaphoreHandleTypeKeyedMutexKmt then 'name' must be NULL."],["cudaExternalSemaphoreSignalParams","External semaphore  signal parameters"],["cudaExternalSemaphoreSignalParams__bindgen_ty_1",""],["cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_1","Parameters for fence objects"],["cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_3","Parameters for keyed mutex objects"],["cudaExternalSemaphoreWaitParams","External semaphore wait parameters"],["cudaExternalSemaphoreWaitParams__bindgen_ty_1",""],["cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_1","Parameters for fence objects"],["cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_3","Parameters for keyed mutex objects"],["cudaFuncAttributes","CUDA function attributes"],["cudaGraphicsResource","CUDA graphics interop resource"],["cudaHostNodeParams","CUDA host node parameters"],["cudaIpcEventHandle_st","CUDA IPC event handle"],["cudaIpcMemHandle_st","CUDA IPC memory handle"],["cudaKernelNodeParams","CUDA GPU kernel node parameters"],["cudaLaunchParams","CUDA launch parameters"],["cudaMemcpy3DParms","CUDA 3D memory copying parameters"],["cudaMemcpy3DPeerParms","CUDA 3D cross-device memory copying parameters"],["cudaMemsetParams","CUDA Memset node parameters"],["cudaMipmappedArray",""],["cudaPitchedPtr","CUDA Pitched memory pointer"],["cudaPointerAttributes","CUDA pointer attributes"],["cudaPos","CUDA 3D position"],["cudaResourceDesc","CUDA resource descriptor"],["cudaResourceDesc__bindgen_ty_1__bindgen_ty_1",""],["cudaResourceDesc__bindgen_ty_1__bindgen_ty_2",""],["cudaResourceDesc__bindgen_ty_1__bindgen_ty_3",""],["cudaResourceDesc__bindgen_ty_1__bindgen_ty_4",""],["cudaResourceViewDesc","CUDA resource view descriptor"],["dim3",""],["double2",""],["float2",""]],"type":[["CUuuid",""],["cuComplex",""],["cuDoubleComplex",""],["cuFloatComplex",""],["cublasHandle_t",""],["cublasLogCallback",""],["cudaArray_const_t","CUDA array (as source copy argument)"],["cudaArray_t","CUDA array"],["cudaEvent_t","CUDA event types"],["cudaExternalMemory_t","CUDA external memory"],["cudaExternalSemaphore_t","CUDA external semaphore"],["cudaGraphExec_t","CUDA executable (launchable) graph"],["cudaGraphNode_t","CUDA graph node."],["cudaGraph_t","CUDA graph"],["cudaGraphicsResource_t","CUDA graphics resource types"],["cudaHostFn_t","CUDA host function \\param userData Argument value passed to the function"],["cudaIpcEventHandle_t",""],["cudaIpcMemHandle_t",""],["cudaMipmappedArray_const_t","CUDA mipmapped array (as source argument)"],["cudaMipmappedArray_t","CUDA mipmapped array"],["cudaStream_t","CUDA stream"],["cudaUUID_t",""],["libraryPropertyType",""],["libraryPropertyType_t",""]],"union":[["cudaExternalMemoryHandleDesc__bindgen_ty_1",""],["cudaExternalSemaphoreHandleDesc__bindgen_ty_1",""],["cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_2",""],["cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_2",""],["cudaResourceDesc__bindgen_ty_1",""]]});