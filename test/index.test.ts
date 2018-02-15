import {expect, test} from '@oclif/test'

import cmd = require('../src')

describe('@oclif/example-single-ts', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world from ./src/@oclif/example-single-ts.ts!')
  })

  test
  .stdout()
  .do(() => cmd.run(['--name', 'jeff']))
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff from ./src/@oclif/example-single-ts.ts!')
  })
})
