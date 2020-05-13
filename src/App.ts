import express from 'express'
import compression from 'compression'
import { reqLogger, errorLogger } from './common/logger'
import router from './routes/routes'

class App {
    public app: express.Application
    constructor() {
        this.app = express()
        this.attachMiddleWares()
        this.mountRoutes()
    }

    private attachMiddleWares(): void {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(compression())
    }

    private mountRoutes(): void {
        this.app.use(reqLogger)
        this.app.use('/', router)
        this.app.use(errorLogger)
    }
}

export const app = (new App().app)
