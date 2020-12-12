/**
 * @param {Number} length Longitud del string a regresar
 * @param {String} encode Tipo de caracteres a regresar
 * @returns Cadena de caracteres aleatorios
 */
const rsg = (length, encode) => {
    const arr = encode === 'ansi' ? 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()=?' : 'abcdefghijklmnñopqrstuvwxyzáéíóúÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789¡!#$%&()=¿?'
    let rndm = []
    for (let i = 0; i < length; i++) {
        const res = Math.floor((Math.random() * arr.length) + 1)
        rndm.push(arr[res])
    }

    return rndm.join('')
}

module.exports = rsg
