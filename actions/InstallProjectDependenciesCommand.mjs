import { Action } from './Action.mjs'
import { print, println, execute } from '../utils.mjs'

export class InstallProjectDependenciesCommand extends Action {
  constructor() {
    super('install-project-dependencies-command')
  }

  async execute(options) {
    print('Installing dependencies...')
    await execute('npm install --save-dev typescript ts-node @types/node')
    println('ok')

    return { projectDependenciesInitialized: true }
  }
}
