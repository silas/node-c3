// C3 Method Resolution Order
//
// http://www.python.org/download/releases/2.3/mro/
// http://www.python.org/download/releases/2.3/license/

var c3 = function(name) {
  return new C3(name)
}

module.exports = c3

function C3(name) {
  this.name = name
  this.map = {}
  this.map[name] = []
}

c3.C3 = C3

C3.prototype.add = function(name, parentName) {
  if (typeof(name) !== 'string')
    throw new Error('Invalid name')

  if (typeof(name) !== 'string')
    throw new Error('Invalid parent name')

  if (!this.map.hasOwnProperty(parentName))
    this.map[parentName] = []

  if (!this.map.hasOwnProperty(name))
    this.map[name] = []

  var ref = this.map[name]

  if (ref.indexOf(parentName) >= 0)
    throw new Error('Duplicate parent')

  this.map[name].push(parentName)

  return this
}

C3.prototype.has = function(name) {
  return this.map.hasOwnProperty(name)
}


C3.prototype.run = function() {
  var self = this
    , map = {}

  Object.keys(self.map).forEach(function(n) {
    map[n] = self.map[n].slice()
  })

  function notHead(l, c) {
    return l.some(function(s) {
      return s.indexOf(c) > 0
    })
  }

  function empty(s) {
    return s.length
  }

  function merge(seqs) {
    var results = []
      , candidate
      , nonEmptySeqs
      , i

    while (true) {
      nonEmptySeqs = seqs.filter(empty)

      if (!nonEmptySeqs.length)
        return results

      for (i = 0; i < nonEmptySeqs.length; i++) {
        candidate = nonEmptySeqs[i][0]

        if (notHead(nonEmptySeqs, candidate)) {
          candidate = null
        } else {
          break
        }
      }

      if (!candidate)
        throw new Error('Inconsistent hierarchy')

      results.push(candidate)

      for (i = 0; i < nonEmptySeqs.length; i++) {
        if (nonEmptySeqs[i][0] == candidate)
          nonEmptySeqs[i].shift()
      }
    }
  }

  function run(name) {
    return merge([[name]].concat(map[name].map(run)).concat([map[name]]))
  }

  return run(self.name)
}
