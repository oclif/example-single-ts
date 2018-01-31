import {Command, flags} from '@anycli/command'
import cli from 'cli-ux'

export default class AnycliExampleSingleTs extends Command {
  static flags = {
    name: flags.string({char: 'n', description: 'name to print'})
  }

  async run() {
    const name = this.flags.name || 'world'
    cli.log(`hello ${name}!`)
  }
}
