const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.Port ?? 3000

// const processRequest = (req, res) => {
//   if (req.url === '/') {
//     res.statusCode = 200 // ok
//     res.setHeader('Content-Type', 'text/html; charset=utf-8')
//     res.end('<h1>Bienvenido a mi página de inicio</h1>')
//   }
// }

// los mismo que el codigo de arriba pero de forma conjunta, arriba esta separado.

// const server = http.createServer((req, res) => {
//   console.log('request received: ', req.url)
//   res.end('Hola Mundo')
// })

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.end('<h1>Mi página</h1>')
  } else if (req.url === '/imagen.jpg') {
    fs.readFile('./orgullo.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else if (req.url === '/orgullo') {
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Not Found
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
