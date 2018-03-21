import {Command, flags} from '@oclif/command'

class OclifExampleSingleTs extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ example-single-ts
hello world from ./src/@oclif/example-single-ts.ts!
`,
    `$ example-single-ts --name myname
hello myname from .src/@oclif/example-single-ts.ts!
`,
  ]

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    // add --help flag to show CLI version
    help: flags.help({char: 'h'}),

    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(OclifExampleSingleTs)

    const name = flags.name || 'world'
    this.log(`hello ${name} from ${__filename}!`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}

export = OclifExampleSingleTs
