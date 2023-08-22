const http = require('node:http')

const desiredPort = process.env.Port ?? 3000

// commonJS -> modulos clásicos de node
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-type', 'text/html; charset=utf-8')
          return res.end('<h1>404</h1>')
      }
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''

          // Escuchar el evento data, chunk trozo en ingles
          req.on('data', (chunk) => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            // llamar a una base de datos para guardar la info, puede ser un ejemplo
            res.writeHead(201, {
              'Content-type': 'application/json; charset=utf-8'
            })

            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })

          break
        }

        default:
          res.statusCode = 400
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          return res.end('404 Not found')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
