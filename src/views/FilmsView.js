import{View} from './View'

export class FilmsView extends View{
  render() {
    const container = document.createElement('div')
    container.textContent = 'filmsView'
    this.getRoot().append(container)
  }
}