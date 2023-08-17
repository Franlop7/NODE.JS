const fs = require('node:fs')
// sólo en los módulos nativos, que no tienen promesas nativas
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

// console.log('Leyendo el primer archivo ...')
// fs.readFilePromise('./archivo.txt', 'utf-8')
//     .then(text => {
//         console.log('Primer texto:', text)
//     })

console.log('Leyendo el primer archivo ...')
// const text = fs.readFileSync('./archivo.txt', 'utf-8')
fs.readFile('./archivo.txt', 'utf-8', (_err, text) => {
  // <-- efecutas este callback
  console.log('Primer texto:', text)
})

// console.log(text)
console.log('Hacer cosas mientras lee el archivo ...')

console.log('Leyendo el segundo archivo ...')
// const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
fs.readFile('./archivo2.txt', 'utf-8', (_err, text) => {
  console.log('Segundo texto:', text)
})

// console.log(secondText)
