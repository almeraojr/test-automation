
// This script click on calculator's buttons and multiply 13 by 24. You can now replace/add buttons to click. :D

const { Chromeless } = require('chromeless')

async function run() {
  const chromeless = new Chromeless()

  const calculando_teste = await chromeless
    .goto('file:///C:/Users/jralm/test-automation/calculator.html')
    .exists('#one')
    .click('#one')
    .click('#three')
    .click('#times')
    .click('#two')
    .click('#four')
    .click('#DoIt')
  console.log(calculando_teste) // everything ok :D


  await chromeless.end()
}

run().catch(console.error.bind(console))