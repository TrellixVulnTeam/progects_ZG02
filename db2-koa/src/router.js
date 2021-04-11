const Router = require('koa-router')

const router = new Router()
const controller = require('./controller')

router.get('/', controller.home)
router.get('profile', controller.profile)


module.exports = {
    router
}