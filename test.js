'use strict'

var test = require('tape')
var s = require('./')

test('returns safe url', function (t) {
  t.plan(6)

  t.equal(
    s('https://foo:bar@example.com'),
    'https://example.com'
  )

  t.equal(
    s('http://foo@example.com'),
    'http://example.com'
  )

  t.equal(
    s('http://example.com'),
    'http://example.com'
  )

  t.equal(
    s('example'),
    'example'
  )

  t.throws(s)

  t.throws(s.bind(null, {}))
})

test('replaces auth with string', function (t) {
  t.plan(1)

  t.equal(
    s('https://foo:bar@example.com', '***'),
    'https://***@example.com'
  )
})
