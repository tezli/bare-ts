
import { configure } from './config'
import { Main } from './main'

const config = configure(process.env)
const main = new Main(config.appName)
console.log(main.name)