import express from 'express'
import compression from 'compression'
import { mongo } from './db/DB'
import { reqLogger, errorLogger } from './common/logger'
import router from './routes/routes'

class App {
    public app: express.Application
    constructor() {
        this.app = express()
        mongo.init()
        this.attachMiddleWares()
    }

    private attachMiddleWares(): void {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(compression())
        this.app.use(reqLogger)

        // Attach App routes
        this.app.use('/', router)

        this.app.use(errorLogger)
    }
}

export const app = (new App().app)
