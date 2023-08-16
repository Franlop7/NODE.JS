const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error(`No se pudo leer el directorio ${folder}`)
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats

        try {
            stats = await fs.stat(filePath) // Status - informaciíóm del archivo
        }catch {
            console.error(`No se puedo leer el archivo ${filePath}`)
            process.exit(1)
        }
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${file.padEnd(30)} ${fileSize.padStart(20)} ${fileModified}`
    })

    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(filesInfo => console.log(filesInfo))
}

ls(folder)