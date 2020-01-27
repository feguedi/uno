import { useEffect, useState } from 'react'
import io from 'socket.io-client'

export default (e, cb) => {
    const [socket, setSocket] = useState(io())
    useEffect(() => {
        socket.on(e, cb)
        const useSocketCleanup = () => {
            socket.off(e, cb)
        }
        return useSocketCleanup
    }, [e, cb])
    return socket
}