import request from '../../request/request'
import Store from '../store/store'

class UserStore extends Store {
  name () {
    return 'user'
  }

  search (query) {
    const url = this.url('search', { q: query })

    const fetch = new Promise((resolve, reject) => {
      request
        .get(url)
        .end((err, res) => {
          if (err) return reject(err)
          resolve(res.body)
        })
    })

    return fetch
  }

  findAll (forceUpdate) {
    let url = this.url('') + '-all'
    if (this._fetches.get(url)) return this._fetches.get(url)
    let fetch = this._fetch(url)

    fetch.then((users) => {
      
      this.users = users
    }).catch((err) => {
      this.users = undefined
      this.log('Found error', err)
    })

    return fetch
  }

}

export default new UserStore()
