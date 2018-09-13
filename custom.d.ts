declare module 'express-promise-router';
declare module 'file-saver';
declare module 'request';
declare namespace Express {
    export interface Request {
        userId?: number;
        customerId?: number;
        adminId?: number;
    }

}