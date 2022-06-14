import { Action } from './Action.mjs'
import { print, println, withPackageJson } from '../utils.mjs'

export class InitScriptsCommand extends Action {
  constructor() {
    super('init-scripts-command')
  }

  async execute(options) {
    print('Adding start and build scripts...')
    await withPackageJson(packageJson => {
      packageJson.version = '0.0.0'
      packageJson.main = 'dist/index.js'
      packageJson.types = 'dist/index.d.ts'
      packageJson.scripts['build'] = 'tsc'
    })
    println('ok')

    return { scriptsInitialized: true }
  }
}
