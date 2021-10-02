import * as socketio from 'socket.io';
import Ticket from './ticket';
import TicketList from './ticket-list';

export default class Sockets {
    io: socketio.Server;
    ticketList: TicketList;

    constructor( io: socketio.Server ) {
        this.io = io;
        this.ticketList = new TicketList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('Cliente conectado');

            socket.on('create-ticket', (payload: any, callback: any) => {
                const ticket: Ticket = this.ticketList.createTicket();
                callback(ticket);
            });

            socket.on('attend-ticket', (payload: any, callback: any) => {
                const ticket: Ticket = this.ticketList.attendTicker(payload.agent, payload.desk) as Ticket;
                this.io.emit('last-13-numbers', this.ticketList.last13Numbers)
                callback(ticket);
            });
        
        });
    }


}