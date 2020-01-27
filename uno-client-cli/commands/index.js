const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción del parámetro'
}

exports.argv = require('yargs')
    .command('port', 'Puerto de la partida', {
        descripcion
    })
    .command('host', 'Host de la partida', {
        descripcion
    })
    .command('user', 'Nombre con el cual queremos conectarnos', {
        descripcion
    })
    .help()
    .argv
