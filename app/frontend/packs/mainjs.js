// inside app/frontend/packs/mainjs.js
const images = require.context('../img', true)

import magicAdd from '../js/magicAdd.js'
import "bootstrap/dist/js/bootstrap.bundle.min.js";


let a = magicAdd(2, 4);

// remove old console.log, and replace by the one below
console.log(`From mainjs, magicAdd result is ${a}`)

