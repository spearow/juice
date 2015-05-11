// Copyright 2014 Michael Yang. All rights reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

use std::raw::Repr;
use core::slice::SliceExt;
use num::traits::NumCast;
use num::complex::{Complex32, Complex64};
use vector::ops::{Copy, Axpy, Scal, Dot, Nrm2, Asum, Iamax};

pub mod ll;
pub mod ops;

pub trait Vector<T> {
    fn inc(&self) -> i32 { 1 }
    fn len(&self) -> i32;
    unsafe fn as_ptr(&self) -> *const T;
    unsafe fn as_mut_ptr(&mut self) -> *mut T;
}

impl<'a, T> Into<Vec<T>> for &'a Vector<T>
    where T: Copy {

    fn into(self) -> Vec<T> {
        let n = self.len() as usize;

        let mut x = Vec::with_capacity(n);
        Copy::copy(self, &mut x);
        unsafe { x.set_len(n); }

        x
    }
}

pub trait VectorOperations<T>: Sized + Vector<T>
    where T: Copy + Axpy + Scal + Dot + Nrm2 + Asum + Iamax {

    #[inline]
    fn update(&mut self, alpha: &T, x: &Vector<T>) -> &mut Self {
        Axpy::axpy(alpha, x, self);
        self
    }

    #[inline]
    fn scale(&mut self, alpha: &T) -> &mut Self {
        Scal::scal(alpha, self);
        self
    }

    #[inline]
    fn dot(&self, x: &Vector<T>) -> T {
        Dot::dot(self, x)
    }

    #[inline]
    fn abs_sum(&self) -> T {
        Asum::asum(self)
    }

    #[inline]
    fn norm(&self) -> T {
        Nrm2::nrm2(self)
    }

    #[inline]
    fn max_index(&self) -> usize {
        Iamax::iamax(self)
    }
}

impl<T> Vector<T> for Vec<T> {

    #[inline]
    fn len(&self) -> i32 {
        let l: Option<i32> = NumCast::from(Vec::len(self));
        match l {
            Some(l) => l,
            None => panic!(),
        }
    }

    #[inline]
    unsafe fn as_ptr(&self) -> *const T { self[..].as_ptr() }

    #[inline]
    unsafe fn as_mut_ptr(&mut self) -> *mut T { (&mut self[..]).as_mut_ptr() }
}

impl<'a, T> Vector<T> for &'a [T] {

    #[inline]
    fn len(&self) -> i32 {
        let l: Option<i32> = NumCast::from(SliceExt::len(*self));
        match l {
            Some(l) => l,
            None => panic!(),
        }
    }

    #[inline]
    unsafe fn as_ptr(&self) -> *const T { self.repr().data }

    #[inline]
    unsafe fn as_mut_ptr(&mut self) -> *mut T { self.repr().data as *mut T }
}

macro_rules! operations_impl(
    ($v: ident, $($t: ty), +) => (
        $( impl VectorOperations<$t> for $v<$t> {} )+
    )
);

operations_impl!(Vec, f32, f64, Complex32, Complex64);
impl<'a> VectorOperations<f32> for &'a [f32] {}
impl<'a> VectorOperations<f64> for &'a [f64] {}
impl<'a> VectorOperations<Complex32> for &'a [Complex32] {}
impl<'a> VectorOperations<Complex64> for &'a [Complex64] {}
