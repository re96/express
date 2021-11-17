const router = require('express').Router()

router
    .route('/')
    .get((req, res) => {
        return res.send('get users')
    })
    .post((req, res) => {
        return res.send('create user')
    })

router
    .route('/:useId')
    .get((req, res) => {
        return res.send('get user')
    })
    .patch((req, res) => {
        return res.send('update user')
    })
    .delete((req, res) => {
        return res.send('delete user')
    })

module.exports = router
