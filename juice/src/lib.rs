//! Juice is a open, modular and clear-designed Machine Intelligence Framework providing
//! state-of-the-art performance for distributed (Deep|Machine) Learning - sharing concepts from
//! Tensorflow and Caffe.
//!
//! An important module in Juice is the backend-agnostic, high-performance computation Framework
//! [Coaster][coaster], which combines performance and usability for Juice Networks.
//! This allows you to run and deploy Juice Networks to servers, desktops or even mobiles
//! using the full available computation power of GPUs or other CUDA/OpenCL supported
//! devices for the learning of your Networks. And if your machine does not have a GPU or you do
//! not want to install CUDA/OpenCL on your local machine, Juice will gracefully fall back to
//! your native host CPU.
//!
//! ## Architecture
//!
//! Juice's Networks are a compositional model, representing a collection of connected
//! [layers][layers], making operations over numerical data.
//!
//! Layers, the building block of a Juice Network, are small units, describing computation over
//! numerical input data. Generally speaking Layers take input and produce an output, but
//! essentially a Layer can describe any functionality e.g. logging as long as it obeys to the
//! general behaviour specifications of a Layer. A Layer can be grouped in one of four
//! Layer types which are closer defined at the [Layers page][layers]. Every
//! layer serves a special purpose and can occur zero, one or many times inside a Network.
//!
//! Juice uses [Coasters'][coaster] SharedTensor, an N-dimensional array
//! for a unified memory interface over the actual data for automatic synchronization between
//! different devices (CUDA, OpenCL, host CPU). A SharedTensor stores the actual data flowing
//! through the system and the weights required for some Layers.
//! The data in a SharedTensor can be copied from backend to backend
//! and can be used for computations on CUDA, OpenCL and native host CPU.
//! It provides performance optimizations and automatically takes care of memory management and synchronization.
//!
//! A neural network can be created by combining container layers like the `Sequential` Layer.
//! Those can be nested and allow for bigger neural networks to be constructed while still
//! retaining the interface of a Layer.
//!
//! The learning and optimization of the Network happens at the [Solver][solver] and is decoupled
//! from the network making the setup clean and flexible. One of the four layer types is a Loss
//! Layer, which is used for the interaction of Network and Solver. The Network produces the loss
//! and gradients, which the Solver uses to optimize the Network through parameter updates. Beside
//! that, the Solver provides housekeeping and other evaluations of the Network. All operation
//! on the Solver happen through Coaster, therefore can be executed on Cuda, OpenCL or native
//! host CPU as well.
//!
//! Juice provides a robust and modular design, which allows to express almost any numerical
//! computation including SVMs, RNNs and other popular learning algorithms. We hope that Juice can
//! help future research and production development alike as it combines expressiveness,
//! performance and usability.
//!
//! ## Philosophy
//!
//! We are strong believers in the technology of Machine Learning.
//!
//! We put our experience in software engineering into Juice, to solve our own
//! need for a modern, performant and easy-to-use Deep Learning Framework.
//! These principles direct our decisions on Juice and related projects.
//!
//! * __Cutting Edge Performance__:</br>
//! For research and industry speed and efficency are crucial for
//! state-of-the-art machine learning over massive data and networks.
//! * __Open and Expressive Architecture__:</br>
//! Designing an open architecture that follows best practices and concepts in
//! Engineering such as modularity, flexibility and expressiveness is critical
//! to stimulate future innovation.
//! * __Clear and Transparent Documentation__:</br>
//! A well-written documentation that addresses both concepts and
//! implementations, empowers developers and researchers to contribute their
//! unique experience to the project for the benefit of everyone.
//!
//! ## Development
//!
//! The implementation of various Layers is pretty scarce at the moment.<br/>
//! There are around a dozen layers, which are really important and would
//! increase the value and functionality of Juice tremendously.<br/>
//! Progress is tracked at<br/>
//!
//! - [Issue #18 for Loss Layers][issue-loss]
//! - [Issue #19 for Activation Layers][issue-activation]
//! - [Issue #20 for Common Layers][issue-common]
//!
//! [coaster]: https://github.com/spearow/coaster
//! [network]: ./network/index.html
//! [layers]: ./layers/index.html
//! [activation]: ./layers/activation/index.html
//! [loss]: ./layers/loss/index.html
//! [solvers]: ./solvers/index.html
//! [optimization]: https://en.wikipedia.org/wiki/Stochastic_optimization
//!
//! [issue-loss]: https://github.com/spearow/juice/issues/18
//! [issue-activation]: https://github.com/spearow/juice/issues/19
//! [issue-common]: https://github.com/spearow/juice/issues/20
#![allow(dead_code)]
#![allow(unused_variables)]
#![deny(
    unused_crate_dependencies,
    clippy::missing_docs,
    clippy::missing_debug_implementations,
    clippy::missing_copy_implementations,
    clippy::trivial_casts,
    clippy::trivial_numeric_casts,
    clippy::unsafe_code,
    clippy::unused_import_braces,
    clippy::unused_qualifications,
    clippy::complexity
)]

#[cfg(test)]
use env_logger as _;

#[macro_use]
extern crate timeit;
#[macro_use]
extern crate log;
extern crate capnp;
extern crate coaster as co;
extern crate coaster_blas as coblas;
extern crate coaster_nn as conn;
extern crate num;
extern crate rand;
pub mod layer;
pub mod layers;
pub mod solver;
pub mod solvers;
pub mod weight;

mod capnp_util;
pub mod util;

// include capnp code generated by `build.rs`
mod juice_capnp {
    include!(concat!(env!("OUT_DIR"), "/juice_capnp.rs"));
}
