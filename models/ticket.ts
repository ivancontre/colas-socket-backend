import { v4 as uuid } from 'uuid';


export default class Ticket {
    id: string;
    number: number;
    desk: string | null;
    agent: string | null;
    
    constructor(number: number) {
        this.id = uuid();
        this.number = number;
        this.desk = null;
        this.agent = null;
    }
};