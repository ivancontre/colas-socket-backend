import Ticket from './ticket';

export default class TicketList {
    lastNumber: number;
    pendingTickets: Ticket[];
    assignedTickets: Ticket[];

    constructor() {
        this.lastNumber = 0;
        this.pendingTickets = [];
        this.assignedTickets = [];
    }

    get nextNumber() {
        this.lastNumber++;
        return this.lastNumber;
    }

    get last13Numbers() {
        return this.assignedTickets.slice(0, 13);
    }

    createTicket() {
        const ticket = new Ticket(this.nextNumber);
        this.pendingTickets = [...this.pendingTickets, ticket];
        return ticket;
    }


    attendTicker(agent: string, desk: string) {

        if (this.pendingTickets.length === 0) {
            return null;
        }

        const ticket: Ticket = this.pendingTickets.shift() as Ticket;

        ticket.agent = agent;
        ticket.desk = desk;

        this.assignedTickets = [ticket, ...this.assignedTickets];

        return ticket;
    }

};