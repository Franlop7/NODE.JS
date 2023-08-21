const http = require('node:http')

const desiredPort = process.env.Port ?? 3000

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200 // ok
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  }
}

const server = http.createServer(processRequest)

// los mismo que el codigo de arriba pero de forma conjunta, arriba esta separado.

// const server = http.createServer((req, res) => {
//   console.log('request received: ', req.url)
//   res.end('Hola Mundo')
// })

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
