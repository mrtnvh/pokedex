import { openDB } from 'idb'
import camelCase from 'lodash/camelCase'
import semver2number from '../semver2number'
import pkg from '../../package.json'
import { OBJECT_STORES } from '../constants'

const objectStores = {
  [OBJECT_STORES.POKEMON]: {
    keyPath: 'id',
    name: 'pokemon'
  }
}

export default () =>
  openDB(pkg.name, semver2number(pkg.version), {
    upgrade(db) {
      Object.keys(objectStores).forEach((key) => {
        const { keyPath } = objectStores[key]
        db.createObjectStore(camelCase(key), { keyPath })
      })
    }
  })
