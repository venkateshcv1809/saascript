import express from 'express'
import compression from 'compression'
import mongo from './db/DB'
import { reqLogger, errorLogger } from './common/logger'
import routes from './routes/routes'

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
    }
}

export default (new App().app)
