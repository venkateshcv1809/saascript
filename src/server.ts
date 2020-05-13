import logger from './common/logger'
import app from './App'

const port = process.env.PORT || 8080

app.listen(port, (): void => {
    logger.info(`server is listening on ${port}`)
})
