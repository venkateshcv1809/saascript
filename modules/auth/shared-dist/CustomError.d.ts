export declare class CustomError extends Error {
    status: number;
    constructor(message: string, status?: number);
}
