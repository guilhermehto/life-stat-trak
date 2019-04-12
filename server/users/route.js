const admin = require('../firebase/admin')
const router = require('express').Router()
const _ = require('lodash')


const register = async (req, res) => {
    try {
        const body = _.pick(req.body, ['email', 'password'])
        if (!body.password || !body.email) {
            res.status(400).send()
            return
        }
        await admin.auth().createUser(body)
        res.send()
    } catch (error) {
        res.status(400).send(error)
    }
}

router.use('/users/register', register)

module.exports = router
