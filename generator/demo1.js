function *f(){
    console.log(1)
    var val = yield 66
    console.log(val)
    return val
}
var test = f()
console.log('------------')
// 并不是这里传的值，因为第一个词调用时，只是执行到var val=yield 66的右侧
console.log(test.next()) 
console.log('------------')
 // 第二次执行时才是上一个yield完成的地方，所以在第二次传值进去，上一个yield结束后返回这次传的值。
console.log(test.next(2))
// ------------
// 1
// {value:66, done:false}
// ------------
// 2
// {value:2, done:false}