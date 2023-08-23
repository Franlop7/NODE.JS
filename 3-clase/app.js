const express = require('express') // require --> commonJS
const crypto = require('node:crypto')
const movies = require('./movies.json')

const PORT = process.env.PORT ?? 3000

const app = express()
app.use(express.json())
app.disable('x-powered-by') // deshabilita el header X-Powered-By: Express

// Todos los recursos que sean MOVIES se identifica con /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movie nor found' })
})

app.post('/movies', (req, res) => {
  const {
    title,
    year,
    director,
    duration,
    pster,
    genre,
    rate
  } = req.body

  const newMovie = {
    id: crypto.randomUUID(), // UUID v4
    title,
    year,
    director,
    duration,
    pster,
    genre,
    rate: rate ?? 0
  }

  // Esto no sería REST, porque estamos guardado
  // el estado de la app en memoria
  movies.push(newMovie)
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
