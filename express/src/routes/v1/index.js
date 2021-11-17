const router = require('express').Router()
const usersRoute = require('./users')

const routes = [
    {
        path: '/users',
        route: usersRoute,
    },
]

routes.forEach(route => {
    router.use(route.path, route.route)
})

module.exports = router
