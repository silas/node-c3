# c3 [![Build Status](https://secure.travis-ci.org/silas/node-c3.png)](http://travis-ci.org/silas/node-c3)

An implementation of the [C3 linearization algorithm](http://en.wikipedia.org/wiki/C3_linearization).

## Getting Started

Install c3

    npm install c3

Create file `demo.js`

    var c3 = require('c3')

    console.log(
      c3('Z')
        .add('Z', 'K1')
        .add('Z', 'K2')
        .add('Z', 'K3')
        .add('K3', 'D')
        .add('K3', 'A')
        .add('K2', 'D')
        .add('K2', 'B')
        .add('K2', 'E')
        .add('K1', 'A')
        .add('K1', 'B')
        .add('K1', 'C')
        .add('E', 'O')
        .add('D', 'O')
        .add('C', 'O')
        .add('B', 'O')
        .add('A', 'O')
        .run()
    )

Run `demo.js`

    [silas@host ~]$ node demo.js
    [ 'Z', 'K1', 'K2', 'K3', 'D', 'A', 'B', 'C', 'E', 'O' ]

## License

This work is licensed under the MIT License (see the LICENSE file).

The implementation is based on [this document][mro] which was released under
the [Python 2.3 license][license].

[mro]: http://www.python.org/download/releases/2.3/mro/
[license]: http://www.python.org/download/releases/2.3/license/
