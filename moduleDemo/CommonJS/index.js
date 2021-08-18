const moduleA = require('./moduleA.js')
console.log('moduleA.a', moduleA.a)
moduleA.add()
console.log('moduleA.b', moduleA.b)
moduleA.b++
console.log('moduleA.b', moduleA.b)
// 这里就体现了值的复制，因为moduleA中本身定义了b为0，count是依赖moduleA本身b变量的，
// 导出变量b是moudleA本身变量b的值复制，所以这里打印还是1（++0），而不是导出变量b（1）加1
console.log('moduleA.b', moduleA.count())
console.log('moduleA.b', moduleA.count())
console.log('index--------------')
const moduleB = require('./moduleB.js')
console.log(moduleA.a)
