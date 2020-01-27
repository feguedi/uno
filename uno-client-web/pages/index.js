import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import useSocket from '../hooks/useSockets'

const ChatOne = props => {
    const [field, setField] = useState('')
    const [newMessage, setNewMessage] = useState(0)
    const [messages, setMessages] = useState(props.messages || [])

    const socket = useSocket('message.chat1', message => {
        setMessages(messages => [...messages, message])
    })

    useSocket('message.chat2', () => {
        setNewMessage(newMessage => newMessage + 1)
    })

    const handleSubmit = e => {
        e.preventDefault()

        const message = {
            id: new Date().getTime(),
            message: field
        }

        socket.emit('message.chat1', message)
        setField('')
        setMessages(messages => [...messages, message])
    }

    return (
        <main>
            <div>
                <Link href="/">
                    <a>{ 'Chat one' }</a>
                </Link>
                <br />
                <Link href="/clone">
                    <a>{ `Chat two${ newMessage > 0 ? `(${ newMessage } new message)` : '' }` }</a>
                </Link>
                <ul>
                    {messages.map(message => (
                        <li key={ message.id }>{ message.value }</li>
                    ))}
                </ul>
                <form onSubmit={ e => handleSubmit(e) }>
                    <input
                        onChange={ e => setField(e.target.value) }
                        type="text"
                        placeholder="Ola ke ase"
                        value={ field }
                    />
                    <button>Enviar</button>
                </form>
            </div>
        </main>
    )
}

ChatOne.getInitialProps = async () => {
    const messages = await (await axios.get(`${ process.env.SERVER_HOST }/messages/chat1`)).data
    return { messages }
}

export default ChatOne
