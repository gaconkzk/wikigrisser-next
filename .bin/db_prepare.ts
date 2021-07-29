import { DBSingleton } from './utils/databaseSingleton'

const db = DBSingleton.getInstance()

const heroes = db.getHeroesMap()

console.log(heroes)
