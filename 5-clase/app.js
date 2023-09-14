import express, { json } from 'express'

import { corsMiddleware } from './middlewares/cors.js'
import { moviesRouter } from './routes/movies.js'

// import { readJSON } from './utils.js'

// En el futuro: el import del json será:
// import  movies from './movies.json' with { type: 'json' }

// como leer un json en ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// como leer un json en ESModules recomendando por ahora
// import { createRequire } from 'node:module'
// const require = createRequire(import.meta.url)
// const movies = require('./movies.json')

// Ahora vamos a extraer lo de arriba a utils.js, nos lo llevamos a routes/movies.js
// const movies = readJSON('./movies.json')

const PORT = process.env.PORT ?? 3000

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by') // deshabilita el header X-Powered-By: Express

app.use('/movies', moviesRouter)

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
