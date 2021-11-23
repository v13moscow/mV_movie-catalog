export class Router{
  #controller
  #routes
  constructor(routes){
    this.#controller = null
    this.#routes = routes
  }
  setController(controller){
    this.#controller = controller
  }
  getRoutInfor() {
  const {location} = window
  const {hash} = location

  return {
    routeName : hash.slice(1)
  }
  }

  init(){
    window.addEventListener('hashchange', (e)=>{
      const routInfo = this.getRoutInfor()
      const TargetView = this.#routes[routInfo.routeName]
      if(TargetView){
        const targetView = new TargetView()
        console.log(targetView);
      }
    })
  }
}