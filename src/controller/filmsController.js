export class FilmsController{
    #router
    #service
    constructor(router, service){
      this.#router = router
      this.#service = service
    }
    init(){
console.log('_work_');
    }
}