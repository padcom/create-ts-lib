import { Action } from './Action.mjs'
import { print, println, copyFile, execute, mkdir } from '../utils.mjs'

export class CreateApplicationFilesCommand extends Action {
  constructor() {
    super('create-application-files-command')
  }

  async execute(options) {
    print('Creating index.ts...')
    if (options.useLibFolder) {
      await mkdir('lib')
      await copyFile('index.ts', `lib/index.ts`)
    } else {
      await copyFile('index.ts')
    }
    println('ok')

    return { applicationFilesInitialized: true }
  }
}
