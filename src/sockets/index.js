import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import { SOCKET_ENDPOINT } from '../config';
import { base } from './constants';

const configureSocket = () => {
    const socket = io(SOCKET_ENDPOINT);
    return createSocketIoMiddleware(socket, base);
};

export default configureSocket;
