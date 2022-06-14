import { Action } from './Action.mjs'
import { print, println, execute, copyFile } from '../utils.mjs'

export class InitTypeScriptCommand extends Action {
  constructor() {
    super('init-typescript-command')
  }

  async execute(options) {
    print('Initializing TypeScript...')
    await copyFile('tsconfig.json')
    await copyFile('tsconfig.build.json')
    println('ok')

    return { typeScriptInitialized: true }
  }
}
