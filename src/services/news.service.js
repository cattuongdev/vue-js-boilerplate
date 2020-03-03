import { BaseService } from './base.service'
import { API_KEY } from '../.env'
export class NewsService extends BaseService {
  static getTopHeadlinesNews () {
    const param = `/top-headlines?country=us&apiKey=${API_KEY}`
    return new Promise((resolve, reject) => {
      return this.request({ auth: false }).get(param)
        .then(response => {
          return resolve(this.responseWrapper(response, response.data.articles))
        })
        .catch(error => {
          const message = error.response.data ? error.response.data.error : error.response.statusText
          reject(this.errorWrapper(error, message))
        })
    })
  }

  static getCustomNews (q) {
    const param = `/everything?q=${q}&apiKey=${API_KEY}`
    return new Promise((resolve, reject) => {
      return this.request({ auth: false }).get(param)
        .then(response => {
          return resolve(this.responseWrapper(response, response.data.articles))
        })
        .catch(error => {
          const message = error.response.data ? error.response.data.error : error.response.statusText
          reject(this.errorWrapper(error, message))
        })
    })
  }
}
