import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        forceNew: true,
        reconnectionAttempts: Infinity,
        timeout: 10000,
        transports: ['websocket'],
    };

    const backendUrl = 'https://consolecoloab-production.up.railway.app';
       // process.env.NODE_ENV === 'development'
      //      ? 'http://localhost:5000'
      //      : 'https://consolecoloab-production.up.railway.app';

    return io(backendUrl, options);
};