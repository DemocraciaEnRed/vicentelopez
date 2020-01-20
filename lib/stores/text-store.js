import urlBuilder from '../url-builder'
import request from '../request/request'
import Store from './store/store'

class TextStore extends Store {
  name () {
    return 'text'
  }

  findAll(forceUpdate){
    if (!forceUpdate && this.texts) return new Promise((resolve, reject) => { resolve(this.texts) })

    let url = this.url('')
    if (this._fetches.get(url)) return this._fetches.get(url)

    let fetch = this._fetch(url)

    fetch.then((texts) => {
      this.texts = texts
    }).catch((err) => {
      this.texts = undefined
      this.log('Found error', err)
    })

    return fetch
  }

  findOneByName (name) {
    /*let item = this.item.find((o) => o.name === name)
    if (item) return Promise.resolve(item)

    let url = this.url('', { name: name })
    if (this._fetches.get(url)) return this._fetches.get(url)

    let fetch = this._fetch(url)

    fetch.then((text) => {
      let id = text.id
      this.set(id, text)
    }).catch((err) => {
      this.log('Found error', err)
    })

    return fetch*/
  }
}

export default new TextStore()
