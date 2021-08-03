function changeHash(num) {
    location.hash = '' + num
}
function createComponent(text) {
    let div = document.createElement('div')
    div.innerText = text
    div.style.border = 'solid 1px black'
    div.style.width = '100px'
    div.style.height = '100px'
    console.log(div)
    return div
}

let cp1 = createComponent('component 1')
let cp2 = createComponent('component 2')
let cp3 = createComponent('component 3')
let place = document.getElementById('router-placeholder')

window.addEventListener('hashchange', () => {
    console.log('hash is change:', location.hash)
    if (place.firstChild) {
        place.firstChild.remove()
    }
    switch (location.hash) {
        case '#1':
            place.appendChild(cp1)
            break
        case '#2':
            place.appendChild(cp2)
            break
        case '#3':
            place.appendChild(cp3)
            break
    }
})

// ====================================================================

let cp1_history = cp1.cloneNode(true)
let cp2_history = cp2.cloneNode(true)
let cp3_history = cp3.cloneNode(true)
let place_history = document.getElementById('router-placeholder-history')

window.addEventListener('popstate', (v) => {
    console.log('history change', v)
    // 修改ui
    stateChange(location.pathname)
})

// 手动使用pushState（）修改url和ui
function changeHistory(num) {
    router('/' + num)
}

window.onload = function () {
    // 获取带href的a标签，拦截默认跳转，手动改url和改ui
    let aList = document.querySelectorAll('a[href]')
    aList.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault()
            router(el.getAttribute('href'))
        })
    })
}

// 修改url + 修改ui
function router(newPath) {
    history.pushState(null, null, newPath)
    stateChange(newPath)
}

// 修改ui
function stateChange(newPath) {
    if (place_history.firstChild) {
        place_history.firstChild.remove()
    }
    switch (newPath) {
        case '/1':
            place_history.appendChild(cp1_history)
            break
        case '/2':
            place_history.appendChild(cp2_history)
            break
        case '/3':
            place_history.appendChild(cp3_history)
            break
    }
}
