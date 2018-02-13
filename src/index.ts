import {Command, flags} from '@oclif/command'

class OclifExampleSingleTs extends Command {
  static title = 'scaffolded command that says hello'

  // usage is set by default
  // add your own by setting this variable
  // can be a string or array
  // static usage = 'title of command'

  static description = `
Add a longer description here
...
...
`

  static examples = [
    `$ example-single-ts
hello world from @oclif/example-single-ts!
`,
    `$ example-single-ts --name myname
hello myname from @oclif/example-single-ts!
`,
    '$ example-single-ts file outputs "hello world!" to file',
    '$ example-single-ts --force',
    '$ example-single-ts --help',
  ]

  static flags = {
    // add --version flag to show CLI version
    version: flags.version(),
    // add --help flag to show CLI version
    help: flags.help(),

    // flag with a value (-n, --name=VALUE)
    name: flags.string({
      char: 'n',                    // shorter flag version
      description: 'name to print', // help description for flag
      hidden: false,                // hide from help
      required: false,              // make flag required (probably should use an arg instead of a required flag though)
      multiple: false,              // allow setting this flag multiple times
      // options: ['a', 'b'],       // only allow the value to be from a discrete set
      // parse: input => 'output',  // instead of the user input, return a differnt value
      // default: 'world',          // default value if flag not passed
    }),

    // flag with no value (-f, --force)
    force: flags.boolean({
      char: 'f',

      // by default boolean flags may also be reversed with `--no-` (in this case: `--no-force`)
      // the flag will be set to false if reversed
      // set this to false to disable this functionality
      // allowNo: false,
    }),
  }

  static args = [
    {
      name: 'file',                  // name of arg to show in help and reference with this.options.args[name]
      required: false,               // make the arg required with `required: true`
      description: 'file to output', // help description
      // hidden: true,               // hide this flag from help
      // parse: input => 'output',   // instead of the user input, return a differnt value
      // default: 'world',           // default value if no arg input
      // options: ['a', 'b'],        // only allow input to be from a discrete set
    },
  ]

  // this makes the parser not fail when it receives invalid arguments
  // set it to off if you need to accept variable arguments
  // static strict = false

  // entry point of command
  async run() {
    const {args, flags} = this.parse(OclifExampleSingleTs)

    const name = flags.name || 'world'
    this.log(`hello ${name} from @oclif/example-single-ts!`)
    if (args.file && flags.force) {
      this.log(`you input ${args.file}`)
    }
  }
}

export = OclifExampleSingleTs
