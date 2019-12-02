//this script searches for UERGS GUAÍBA on google. 
//we use some functions like: go to, write, press keyboard buttons and printscreen.

const { Chromeless } = require('chromeless')
async function run() {
  const chromeless = new Chromeless()
  const screenshot = await chromeless
    .goto('https://www.google.com')
    .type('UERGS GUAÍBA', 'input[name="q"]')
    .press(13)
    .screenshot()
  console.log(screenshot)
  await chromeless.end()
}
run().catch(console.error.bind(console))