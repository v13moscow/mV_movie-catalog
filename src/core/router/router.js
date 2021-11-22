export class Router{
#controller
constructor(){
  this.controller = null;
}
setController(controller){
  this.#controller = controller
}
}