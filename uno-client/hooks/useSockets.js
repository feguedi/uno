import { useEffect } from 'react'
import io from 'socket.io-client'

const socket = io()

export default useSockets = (e, cb) => {
    useEffect(() => {
        socket.on(e, cb)
        return useSocketCleanup = () => {
            socket.off(e, cb)
        }
    }, [e, cb])
    return socket
}