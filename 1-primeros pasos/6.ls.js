const fs = require('node:fs/promises')

// fs.readdir('.', (err, files) => {
//     if (err) {
//         console.error('Error al leer el directorio: ', err)
//         return;
//     }

//     files.forEach(files => {
//         console.log(files)
//     })
// })

fs.readdir('.')
  .then((files) => {
    files.forEach((file) => {
      console.log(file)
    })
  })
  .catch((err) => {
    if (err) {
      console.error('Error al leer el directorio: ', err)
      return;
    }
  })
