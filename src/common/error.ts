export class CustomError extends Error {
    public code: string
    public status: number
    constructor(code = 'GENERIC', status = 500, message: string) {
        super(message)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }

        this.code = code
        this.status = status
        this.message = message
    }
}
