import { count, countAdd } from './moduleA.js'
import * as moduleB from './moduleB.js'

console.log(count) // 3
countAdd()
console.log(count) // 5
if (false) {
    console.log(moduleB.count) //30
    moduleB.countAdd()
    console.log(moduleB.count) //31
}
