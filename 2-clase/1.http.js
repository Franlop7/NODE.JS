const http = require('node:http')

const desiredPort = process.env.Port ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received: ', req.url)
  res.end('Hola Mundo')
})

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})