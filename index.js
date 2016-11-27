const redisClient = require('redis').createClient({
  host: 'redis',
})

const handler = (req, res) => {
  redisClient.get('count', (err, reply) => {
    const count = Number(reply) + 1
    redisClient.set('count', count)
    const response = ['Hello, World!', count].join(' ')
    console.log('responding:', response)
    res.end(response)
  })
}

const server = require('http').createServer(handler).listen(80, () => {
  console.log('server is up on port:', server.address().port)
})
