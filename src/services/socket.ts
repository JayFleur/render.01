import { io, Socket } from 'socket.io-client';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://parallel-ban-tool.onrender.com';

export const initSocket = (): Socket => {
  return io(BACKEND_URL, {
    transports: ['websocket'],
    upgrade: false,
    forceNew: true,
    reconnectionAttempts: 3,
    timeout: 10000,
  });
};