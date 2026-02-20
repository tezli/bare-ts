
import { configure } from './config'
import { App } from './app'

const config = configure(process.env)
const main = new App(config.appName)
console.log(main.name)