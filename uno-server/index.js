const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const port = parseInt(process.env.PORT, 10) || 8000

const messages = {
    chat1: [],
    chat2: []
}

io.on('connection', socket => {
    socket.on('message.chat1', data => {
        messages['chat1'].push(data)
        socket.broadcast.emit('message.chat1', data)
    })
    socket.on('message.chat2', data => {
        messages['chat2'].push(data)
        socket.broadcast.emit('message.chat2', data)
    })
})

app.get('/messages/:chat', (req, res) => {
    res.json(messages[req.params.chat])
})

app.get('*', (req, res) => res.status(404).send('<h1>Khe???</h1>'))

server.listen(port, () => console.log(`Escuchando puerto ${ port }`))