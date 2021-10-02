import Ticket from "../../models/ticket";

declare module Express {
    export interface Request {
        tickets: Ticket[];
    }
}