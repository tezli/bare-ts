import { Main } from './main'

const name = 'name'
const main = new Main(name)
console.log(name === main.getName())