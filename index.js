import {FilmsController} from './src/controller/filmsController'
import {Router} from './src/core/router/router'
import{FilmsService} from './src/core/service/filmsServece'

const controller = new FilmsController(router, service)
const router = new Router()
const service = new FilmsService()
router.setController(controller)
controller.init()