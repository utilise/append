var expect = require('chai').expect
  , prepend = require('./')

describe('prepend', function() {
  it('should prepend value to datum', function() {
    var a = ['lorem', 'ipsum']
    expect(a.map(prepend('_'))).to.eql(['lorem_', 'ipsum_'])
  })
})