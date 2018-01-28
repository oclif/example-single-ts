const {Command, flags} = require('@dxcli/command')
const {cli} = require('cli-ux')

class DxcliExampleSingleTsCommand extends Command {
  async run() {
    const name = this.flags.name || 'world'
    cli.log(`hello ${name}!`)
  }
}

DxcliExampleSingleTsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DxcliExampleSingleTsCommand
