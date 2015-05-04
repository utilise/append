var expect = require('chai').expect
  , append = require('./')

describe('append', function() {
  it('should append value to datum', function() {
    var a = ['lorem', 'ipsum']
    expect(a.map(append('_'))).to.eql(['lorem_', 'ipsum_'])
  })
})