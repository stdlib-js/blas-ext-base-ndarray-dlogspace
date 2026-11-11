<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dlogspace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a one-dimensional double-precision floating-point ndarray with logarithmically spaced values over a specified interval.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import dlogspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-dlogspace@deno/mod.js';
```

#### dlogspace( arrays )

Fills a one-dimensional double-precision floating-point ndarray with logarithmically spaced values over a specified interval.

```javascript
import Float64Vector from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-vector-float64@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';

var x = new Float64Vector( [ 0.0, 0.0, 0.0, 0.0 ] );

var base = scalar2ndarray( 10.0, {
    'dtype': 'float64'
});

var strt = scalar2ndarray( 0.0, {
    'dtype': 'float64'
});

var stp = scalar2ndarray( 3.0, {
    'dtype': 'float64'
});

var endpoint = scalar2ndarray( true, {
    'dtype': 'bool'
});

var out = dlogspace( [ x, base, strt, stp, endpoint ] );
// returns <ndarray>[ 1.0, 10.0, 100.0, 1000.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray specifying the base of the logarithmic scale.
    -   a zero-dimensional ndarray specifying the exponent of the starting value, where the starting value is given by `base^start`.
    -   a zero-dimensional ndarray specifying the exponent of the final value, where the final value is given by `base^stop`.
    -   a zero-dimensional ndarray specifying whether to include the `base^stop` value when writing values to the input ndarray. If `true`, the input ndarray is filled with logarithmically spaced values over the closed interval `[base^start, base^stop]`. If `false`, the input ndarray is filled with logarithmically spaced values over the half-open interval `[base^start, base^stop)`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Let `M` be the number of generated values (which is either `N` or `N+1` depending on whether `endpoint` is `true` or `false`, respectively). The spacing between the exponents is thus given by

    ```text
    Δ = (stop-start)/(M-1)
    ```

    and the generated values are equal to `base^(start+Δ*i)` for `i = 0, 1, ..., M-1`.

-   When the number of generated values is greater than `1` and `endpoint` is `true`, the set of values written to a provided input ndarray is guaranteed to include the `base^start` and `base^stop` values. Beware, however, that values between `base^start` and `base^stop` are subject to floating-point rounding errors. Hence,

    <!-- eslint-disable max-len -->

    ```javascript
    import Float64Vector from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-vector-float64@deno/mod.js';
    import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
    import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';

    var x = new Float64Vector( [ 0.0, 0.0, 0.0 ] );

    var base = scalar2ndarray( 10.0, {
        'dtype': 'float64'
    });

    var strt = scalar2ndarray( 0.0, {
        'dtype': 'float64'
    });

    var stp = scalar2ndarray( 1.0, {
        'dtype': 'float64'
    });

    var endpoint = scalar2ndarray( true, {
        'dtype': 'bool'
    });

    dlogspace( [ x, base, strt, stp, endpoint ] );

    var arr = ndarray2array( x );
    // returns [ 1.0, ~3.16, 10.0 ]
    ```

    where `arr[1]` is only guaranteed to be approximately equal to the square root of `10`.

-   When `N = 1` and `endpoint` is `false`, only the `base^start` value is written to a provided input ndarray. When `N = 1` and `endpoint` is `true`, only the `base^stop` value is written to a provided input ndarray.

-   If `start < stop`, the exponents are written to a provided input ndarray in ascending order; otherwise, they are written in descending order.

-   The input ndarray is **mutated**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-discrete-uniform@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import ndarraylike2scalar from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ndarraylike2scalar@deno/mod.js';
import dlogspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-dlogspace@deno/mod.js';

var opts = {
    'dtype': 'float64'
};

var x = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( x ) );

var base = scalar2ndarray( 10.0, opts );
console.log( 'Base: %d', ndarraylike2scalar( base ) );

var strt = scalar2ndarray( 0.0, opts );
console.log( 'Start: %d', ndarraylike2scalar( strt ) );

var stp = scalar2ndarray( 9.0, opts );
console.log( 'Stop: %d', ndarraylike2scalar( stp ) );

var endpoint = scalar2ndarray( true, {
    'dtype': 'bool'
});
console.log( 'Endpoint: %s', ndarraylike2scalar( endpoint ) );

dlogspace( [ x, base, strt, stp, endpoint ] );
console.log( ndarray2array( x ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ndarray-dlogspace.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ndarray-dlogspace

[test-image]: https://github.com/stdlib-js/blas-ext-base-ndarray-dlogspace/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-dlogspace/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ndarray-dlogspace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ndarray-dlogspace?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ndarray-dlogspace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ndarray-dlogspace/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-dlogspace/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-dlogspace/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-dlogspace/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-dlogspace/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-dlogspace/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-dlogspace/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-dlogspace/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ndarray-dlogspace/main/LICENSE

</section>

<!-- /.links -->
