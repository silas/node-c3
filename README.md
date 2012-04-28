# c3 [![Build Status](https://secure.travis-ci.org/silas/node-c3.png)](http://travis-ci.org/silas/node-c3)

An implementation of the [C3 linearization algorithm](http://en.wikipedia.org/wiki/C3_linearization).

## Getting Started

Install c3

    npm install c3

Usage

    var assert = require('assert')
      , c3 = require('c3')

    var c = c3('a')
    c.add('a', 'b')
    c.add('b', 'c')
    assert.deepEqual(c.run(), ['a', 'b', 'c'])

## License

This work is licensed under the MIT License (see the LICENSE file).

The implementation is based on [this document][mro] which was released under
the [Python 2.3 license][license].

[mro]: http://www.python.org/download/releases/2.3/mro/
[license]: http://www.python.org/download/releases/2.3/license/
