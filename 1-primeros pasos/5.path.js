const path = require('node:path')

// Barra separadora de carpetas según SO
console.log(path.sep)
// -> unix /
// -> windows \

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/fran-secret/password.txt')
console.log(base)

const filename = path.basename('/tmp/fran-secret/password.txt', '.txt')
console.log(filename)

const extension = path.extname('image.png')
console.log(extension)
