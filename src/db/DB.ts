import mongoose from 'mongoose'
import logger from '../common/logger'

const MONGO_URL = 'mongodb://saascript-mongo:27017/saascript'

interface DB {
    db: mongoose.Connection & {
        then: Promise<mongoose.Connection>['then'];
        catch: Promise<mongoose.Connection>['catch'];
    }
}

class DB {
    public init() {
        if (!this.db) {
            this.db = mongoose.createConnection(MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

            this.db.then(() => {
                logger.info(`Connected to mongoDB URL - ${MONGO_URL}`)
            }).catch((mongoError) => {
                logger.error(`Error connecting to mongoDB URL - ${MONGO_URL}`, mongoError)
            })
        }
    }
}

export const mongo = new DB()
