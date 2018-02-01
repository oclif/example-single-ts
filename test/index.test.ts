import {expect, test} from '@anycli/test'

import cmd = require('../src')

const command = '@anycli/example-single-ts'

describe(command, () => {
  test
  .stdout()
    .do(() => cmd.run([]))
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world from @anycli/example-single-ts!')
  })

  test
  .stdout()
    .do(() => cmd.run(['--name', 'jeff']))
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff from @anycli/example-single-ts!')
  })
})
