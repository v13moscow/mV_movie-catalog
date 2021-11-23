import{View} from './View'

export class FaivoritsView extends View{
  render() {
    const container = document.createElement('div')
    container.textContent = 'FaivoritsView'
    this.getRoot().append(container)
}
}