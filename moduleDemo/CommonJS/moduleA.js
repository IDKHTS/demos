let a = { count: 100 }
let b = 0
function add() {
    a.count++
    console.log(a.count)
}
function count() {
    return ++b
}

module.exports = {
    a,
    add,
    b,
    count,
}
