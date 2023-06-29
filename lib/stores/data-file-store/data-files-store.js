import encode from 'mout/queryString/encode'

import Store from '../store/store'

class DataFileStore extends Store {
  name () {
    return 'dataFile-us'
  }

  url (id, params = {}) {
    if (typeof id === 'object') {
      params = id
      id = ''
    }

    id = id ? '/' + id : ''

    return `/api/v2/data-file${id}${encode(params)}`
  }

  findAll (forceUpdate) {
    let url = this.url('') + '-all'
    if (this._fetches.get(url)) return this._fetches.get(url)
    let fetch = this._fetch(url)

    fetch.then((files) => {
      this.files = files
    }).catch((err) => {
      this.files = undefined
      this.filesDict = undefined
      this.log('Found error', err)
    })

    return fetch
  }

  findAllDict (forceUpdate) {
    if (!forceUpdate && this.textsDict)
      return new Promise((resolve, reject) => { resolve(this.textsDict) })
    else
      return this.findAll().then(() => { return this.textsDict })
  }

  /*findOneByName (name) {
    if (this.texts){
      return new Promise((resolve, reject) => {
        this.texts.forEach(function(text){
          if (text.name == name) resolve(text.text)
        })
        resolve(undefined)
      })
    } else {
      return this.findAll().then(() => {
        this.texts.forEach(function(text){
          return text.text
        })
        return undefined
      })
    }
  }*/
}

export default new DataFileStore()
