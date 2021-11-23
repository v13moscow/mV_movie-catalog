export class FilmsController {
    #router
    #service
    constructor(router, service) {
      this.#router = router
      this.#service = service
    }
    async init() {
    const films = await this.#service.getFilms()
    films.forEach(filmModel =>{
     // console.log(filmModel.getTitle())
    })
    this.#router.init()
    }
}