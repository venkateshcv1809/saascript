import express from 'express'
import router from './routes/routes'

class App {
    constructor () {
        this.express = express()
        this.attachMiddleWares()
        this.mountRoutes()
    }

    public express: express.Express

    private attachMiddleWares (): void {
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
    }

    private mountRoutes (): void {
        this.express.use('/', router)
    }
}

export default new App().express
