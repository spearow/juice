use coaster::prelude::*;

fn main() {
    let ntv = Native::new();
    let dev = ntv.new_device(ntv.hardwares()).unwrap();

    let _mem = {
        let x = &mut SharedTensor::<f32>::new(&10);
        //~^ ERROR error: borrowed value does not live long enough
        let m = x.write_only(&dev).unwrap();
        m
    };
}
