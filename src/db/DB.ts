import mongoose from 'mongoose'
import logger from '../common/logger'

const MONGO_URL = 'mongodb://saascript-mongo:27017/saascript'

export class DB {
    private mongoUri: string
    public db: mongoose.Connection

    constructor(uri: string) {
        this.mongoUri = uri
        this.db = mongoose.createConnection()
    }

    public async connect() {
        try {
            await this.db.openUri(this.mongoUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            logger.info(`Connected to mongoDB URL - ${this.mongoUri}`)
        } catch (mongoError) {
            logger.error(`Error connecting to mongoDB URL - ${this.mongoUri}`, mongoError)
        }
    }

    public async disconnect() {
        try {
            await this.db.close()
            logger.info(`Disconnected from mongoDB URL - ${this.mongoUri}`)
        } catch (mongoError) {
            logger.error(`Error disconnecting from mongoDB URL - ${this.mongoUri}`, mongoError)
        }
    }
}

export default new DB(MONGO_URL)
