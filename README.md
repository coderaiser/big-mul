# Big Mul [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

Multiply array representation of big numbers using [BigInt](https://developers.google.com/web/updates/2018/05/bigint) where possible or [Fürer's algorithm](https://en.wikipedia.org/wiki/F%C3%BCrer%27s_algorithm).

## Install

```
npm i big-mul --save
```

## How to use?

```js
const bigMul = require('big-mul');

bigMul([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])
// returns
[ 1, 5, 2, 4, 1, 5, 7, 8, 7, 5, 0, 1, 9, 0, 5, 2, 1 ]
```

## Environments

In old `node.js` environments that not fully supports `es2015`, `big-mul` could be used with:

```js
var bigSum = require('big-mul/legacy');
```

## Related

- [big-sum](https://github.com/coderaiser/big-sum "Big Sum") - sum array representation of big numbers
- [big-wrap](https://github.com/coderaiser/big-sum "Big Sum") - wrap array representation of big numbers

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/big-mul.svg?style=flat&longCache=true
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/big-mul/master.svg?style=flat&longCache=true
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/big-mul.svg?style=flat&longCache=true
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat&longCache=true
[NPMURL]:                   https://npmjs.org/package/big-mul "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/big-mul  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/big-mul "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

