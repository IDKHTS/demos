// 需求：for of遍历两个生成器函数A，B，期望按序先遍历了一个生成器A的再遍历另外一个B的

// ************无 yield* 语法，A时*********
function test1() {
    function* A() {
        yield 'a'
        yield 'b'
    }
    function* B() {
        yield A()
        yield 'c'
        yield 'd'
    }
    var g = B()
    for (let item of g) {
        console.log(item)
    }
    // 原本期望打印a b c d
    // 但是事实上却打印了 f {<suspended>} c d
}

// ************无 yield* 语法时*********
// 需要自己手动写嵌套语法, 以下改写B
function test2() {
    function* A() {
        yield 'a'
        yield 'b'
    }
    function* B() {
        let g = A()
        let itObj = g.next()
        while (!itObj.done) {
            yield itObj.value
            itObj = g.next()
        }
        yield 'c'
        yield 'd'
    }
    var g = B()
    for (let item of g) {
        console.log(item)
    }
    // 原本期望打印a b c d
    // 事实上打印a b c d
}

// 为了方便，ES6写了个语法糖，yield* 可实现上面的改写，再改写B
function test3() {
    function* A() {
        yield 'a'
        yield 'b'
    }
    function* B() {
        yield* A()
        yield 'c'
        yield 'd'
    }
    var g = B()
    for (let item of g) {
        console.log(item)
    }
    // 原本期望打印a b c d
    // 事实上打印a b c d
}

test1()
console.log('------------')
test2()
console.log('------------')
test3()
