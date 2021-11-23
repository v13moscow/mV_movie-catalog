import {EnvData} from '../../core/constans/envData'
import { FilmModel } from '../../models/filmModel'

export class FilmsService {
  static #DefaultSearchaValue = 'Marvel'
  static #Urls = {
    Main: (searchByName = FilmsService.#DefaultSearchaValue) =>`https://www.omdbapi.com/?s=${searchByName}&apikey=${EnvData.FilmsApiKey}`,
    filmById: (filmID) =>`https://www.omdbapi.com/?i=${filmId}&apikey=${EnvData.FilmsApiKey}`
  }
  async getFilms() {
    try {
      const response = await fetch(FilmsService.#Urls.Main())
      const data = await response.json()
     const filmModel = data.Search.map(filmData =>{
        return new FilmModel({
          Poster: filmData.Poster,
          Title: filmData.Title,
          Year: filmData.Year,
          imdbID: filmData.Imdb
        })
      })
      console.log(filmModel)
      return filmModel
    }catch(error){
      return {
        error: error.message
      }
    }
    }
}