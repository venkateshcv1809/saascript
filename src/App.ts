/* eslint-disable no-unused-vars */
import express, { Request, Response, NextFunction } from 'express'
import compression from 'compression'
import mongo from './db/DB'
import { reqLogger, errorLogger } from './common/logger'
import routes from './routes/routes'
import { CustomError } from './common/error'

class App {
    public app: express.Application
    constructor() {
        this.app = express()
        mongo.connect()
        this.attachMiddleWares()
    }

    private attachMiddleWares(): void {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(compression())
        this.app.use(reqLogger)

        // Attach App routes
        this.app.use('/', routes)

        this.app.use(errorLogger)
        this.handleError()
    }

    private handleError(): void {
        this.app.use((err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
            res.status(err.status || 500)
            res.send({
                code: err.code || 'GENERIC',
                message: err.message || 'Internal Server Error'
            })
        })
    }
}

export default (new App().app)
