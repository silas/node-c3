var c3 = require('../lib')

exports.basic = function(test) {
  var c = c3('a')
  c.add('a', 'b')
  c.add('b', 'c')
  test.deepEqual(c.map, { a: [ 'b' ], b: [ 'c' ], c: [] })
  test.deepEqual(c.run(), ['a', 'b', 'c'])
  test.deepEqual(c.map, { a: [ 'b' ], b: [ 'c' ], c: [] })
  test.ok(c.has('a'))
  test.ok(c.has('b'))
  test.ok(c.has('c'))
  test.ok(!c.has('d'))
  test.done()
}

exports.complex = function(test) {
  var c = c3('Z')
  c.add('Z', 'K1')
  c.add('Z', 'K2')
  c.add('Z', 'K3')
  c.add('K3', 'D')
  c.add('K3', 'A')
  c.add('K2', 'D')
  c.add('K2', 'B')
  c.add('K2', 'E')
  c.add('K1', 'A')
  c.add('K1', 'B')
  c.add('K1', 'C')
  c.add('E', 'O')
  c.add('D', 'O')
  c.add('C', 'O')
  c.add('B', 'O')
  c.add('A', 'O')
  test.deepEqual(c.run(), ['Z', 'K1', 'K2', 'K3', 'D', 'A', 'B', 'C', 'E', 'O'])
  test.done()
}

exports.invalid = function(test) {
  var n = function() { return c3('a') }
  // circular
  test.throws(function() { n().add('a', 'b').add('b', 'a').run() })
  // duplicate
  test.throws(function() { n().add('a', 'b').add('a', 'b') })
  test.done()
}

