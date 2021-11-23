export class Router{
  #controller
  #routes
  #root
  constructor(routes, root){
    this.#controller = null
    this.#routes = routes
    this.#root = root
  }
  setController(controller){
    this.#controller = controller
  }
  #getRoutInfor() {
  const {location} = window
  const {hash} = location

  return {
    routeName : hash.slice(1)
  }
  }
  #hashChange(){
    console.log('this',this);
    const routInfo = this.#getRoutInfor()
    const TargetView = this.#routes[routInfo.routeName]
    if(TargetView){
      this.#root.innerHTML = ''
      const targetView = new TargetView(this.#root)
      targetView.render()
    }
  }
  init(){
    window.addEventListener('hashchange', this.#hashChange.bind(this))
  }
}