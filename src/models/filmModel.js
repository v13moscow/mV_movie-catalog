export class FilmModel {
  #poster 
  #title
  #year 
  #imdbID
  #isFavorite
  constructor(filmData){
    this.#poster = filmData.Poster
    this.#title = filmData.Title
    this.#year = filmData.Year
    this.#isFavorite = false
    this.#imdbID = filmData.imdbID
  }
  getPoster(){
    return this.#poster
  }
  getTitle(){
    return this.#title
  }
  getYear(){
    return this.#year
  }
  getIsFavorite(){
    return this.#isFavorite
  }
  getImdbID(){
    return this.#imdbID
  }
  setIsFavorite(isFavorite){
    this.#isFavorite = isFavorite
  }
}
