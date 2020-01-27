const colors = require('colors')
const { Socket } = require('net')
const { argv } = require('./commands')

let jugador = new Socket()
process.stdin.setEncoding('utf-8')
const stdin = process.openStdin()
const { port, host, user } = argv

jugador.connect(port, host, () => {
    console.log(`Conectado a ${ host }:${ port }`)
    process.stdout.write('> ')
})

jugador.on('error', err => {
    console.log(`Error: ${ err.code }`)
    process.exit(1)
})

stdin.addListener('data', data => {
    let inp = data.toString().trim()
    if (inp === 'exit') {
        jugador.destroy()
        stdin.destroy()
    } else {
        jugador.write(inp)
    }
})

jugador.on('data', data => {
    const comand = data.toString()
})

jugador.on('close', () => {
    console.log('Conexión cerrada')
    process.exit()
})
