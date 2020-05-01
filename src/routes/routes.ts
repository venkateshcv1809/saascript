import express from 'express'
import graphqlHTTP from './graphql/mount'

const router = express.Router()

router.get('/', (_req, res) => {
    res.json({
        message: 'Welcome!'
    })
})

router.use('/graphql', graphqlHTTP)

export default router
