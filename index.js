import {FilmsController} from './src/controller/filmsController'
import {Router} from './src/core/router/router'
import{FilmsService} from './src/core/service/filmsServece'
import { FilmsView } from './src/views/FilmsView'
import { FaivoritsView } from './src/views/FaivoritsView'
import{FilmView } from './src/views/FilmView'
import{Routes} from './src/core/constans/routes'

const routes = {
    [Routes.Main]: FilmsView,
    [Routes.Faivorits]: FaivoritsView,
    [Routes.Film]: FilmView,
}
const router = new Router(routes)
const service = new FilmsService()
const controller = new FilmsController(router, service)
router.setController(controller)
controller.init()
