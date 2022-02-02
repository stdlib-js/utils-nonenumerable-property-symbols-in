<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# nonEnumerablePropertySymbolsIn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's own and inherited non-enumerable symbol properties.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-nonenumerable-property-symbols-in
```

</section>

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var nonEnumerablePropertySymbolsIn = require( '@stdlib/utils-nonenumerable-property-symbols-in' );
```

#### nonEnumerablePropertySymbolsIn( obj )

Returns an `array` of an object's own and inherited non-enumerable symbol properties.

```javascript
var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
var Symbol = require( '@stdlib/symbol-ctor' );
var defineProperty = require( '@stdlib/utils-define-property' );

var obj = {};

if ( hasSymbolSupport() ) {
    defineProperty( obj, Symbol( 'a' ), {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'b'
    });
}

var symbols = nonEnumerablePropertySymbolsIn( obj );
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Property order is not guaranteed, as `object` property enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s properties, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );
var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
var Symbol = require( '@stdlib/symbol-ctor' );
var nonEnumerablePropertySymbolsIn = require( '@stdlib/utils-nonenumerable-property-symbols-in' );

var hasSymbols = hasSymbolSupport();
var symbols;
var obj;

function Foo() {
    if ( hasSymbols ) {
        defineProperty( this, Symbol( 'baz' ), {
            'configurable': false,
            'enumerable': false,
            'writable': true,
            'value': 'qux'
        });
    }
    return this;
}

if ( hasSymbols ) {
    defineProperty( Foo.prototype, Symbol( 'bip' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'bop'
    });
}

obj = new Foo();
symbols = nonEnumerablePropertySymbolsIn( obj );

console.log( symbols );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/enumerable-property-symbols-in`][@stdlib/utils/enumerable-property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-nonenumerable-property-symbols`][@stdlib/utils/inherited-nonenumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/nonenumerable-property-names-in`][@stdlib/utils/nonenumerable-property-names-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/nonenumerable-property-symbols`][@stdlib/utils/nonenumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/property-symbols-in`][@stdlib/utils/property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-nonenumerable-property-symbols-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-nonenumerable-property-symbols-in

[test-image]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols-in/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols-in/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-nonenumerable-property-symbols-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-nonenumerable-property-symbols-in?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-nonenumerable-property-symbols-in.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-nonenumerable-property-symbols-in/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/enumerable-property-symbols-in]: https://github.com/stdlib-js/utils-enumerable-property-symbols-in

[@stdlib/utils/inherited-nonenumerable-property-symbols]: https://github.com/stdlib-js/utils-inherited-nonenumerable-property-symbols

[@stdlib/utils/nonenumerable-property-names-in]: https://github.com/stdlib-js/utils-nonenumerable-property-names-in

[@stdlib/utils/nonenumerable-property-symbols]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols

[@stdlib/utils/property-symbols-in]: https://github.com/stdlib-js/utils-property-symbols-in

<!-- </related-links> -->

</section>

<!-- /.links -->
