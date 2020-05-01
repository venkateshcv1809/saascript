import logger from 'winston'
import app from './App'

const port = process.env.PORT || 8080

app.listen(port, (): void => {
    logger.debug(`server is listening on ${port}`)
})
