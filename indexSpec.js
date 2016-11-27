const assert = require('assert')
const request = require('superagent')

describe('server', () => {
  it('should say hello', (done) => {
    request
      .get('http://web')
      .end((err, res) => {
        if (err) { return done(err) }
        assert.equal(res.statusCode, 200)
        assert(!!res.text.match(/Hello, World! \d+/))
        done()
      })
  })
})
