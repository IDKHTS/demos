
// 按照async/await方式调用generator
function runAsAsync(gen) {
    return new Promise((resolve, reject) => {
        const generator = gen()

        function runNext(data) {
            // genertort取出iterator
            const iterator = generator.next(data)
            // console.log(iterator)

            // iterator中value为结果promise
            const p = iterator.value

            // return时，done为true，直接返回值；没有return时，done为true，value为undefined，也直接返回
            if (iterator.done) {
                resolve(p)
                return
            }

            // 完成时pormise的结果再传入generator内，值为下一次的值
            p.then(
                (data) => runNext(data),
                (err) => reject(err)
            )
        }

        runNext()
    })
}

// 异步函数（返回promise）
function asyncFn(p) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(p)
            resolve(p + ' result')
        }, 500)
    })
}

// generator 模拟await
function* gen() {
    let res1 = yield asyncFn('p1')
    console.log(res1)
    let res2 = yield asyncFn('p2')
    console.log(res2)
    let res3 = yield asyncFn('p3')
    console.log(res3)
    let res4 = yield asyncFn('p4')
    console.log(res4)
    // return res4
}

const res = runAsAsync(gen)
res.then((v) => console.log(v))
