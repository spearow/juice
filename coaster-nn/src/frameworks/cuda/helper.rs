//! Provides useful macros for easier NN implementation for CUDA/cuDNN.

macro_rules! read {
    ($x:ident, $slf:ident) => {
        $x.read($slf.device()).unwrap()
    };
}

macro_rules! read_write {
    ($x:ident, $slf:ident) => {
        $x.read_write($slf.device()).unwrap()
    };
}

macro_rules! write_only {
    ($x:ident, $slf:ident) => {
        $x.write_only($slf.device()).unwrap()
    };
}

// trans! cannot be inlined into macros above, because `$mem` would become
// intermidiate variable and `*mut $t` will outlive it.
macro_rules! trans {
    ($mem:ident) => {
        unsafe { ::std::mem::transmute::<u64, *const ::libc::c_void>(*$mem.id_c()) }
    };
}

macro_rules! trans_mut {
    ($mem:ident) => {
        unsafe { ::std::mem::transmute::<u64, *mut ::libc::c_void>(*$mem.id_c()) }
    };
}

macro_rules! exec {
    ($f:expr => $msg:literal) => {{
        let res = $f;
        res.map_err(|e| {
            log::debug!("Unable to execute operation {}: {:?}", $msg, e);
            co::plugin::Error::PluginInner(Box::new(e))
        })
    }};
    ($f:expr => $msg:literal as $err:ty) => {{
        exec!($f => $msg).map_err(<$err>::from)
    }};
}

macro_rules! exec2 {
    ($f:expr => $msg:literal) => {{
        exec!($f => $msg as co::Error)
    }};
}
