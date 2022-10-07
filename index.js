const more_btn = document.querySelector('.more-btn')
const req_btn = document.querySelector('.req-btn')
const vk = document.querySelector('.req-vk')
const req_conf = document.querySelector('.req-conf')
const req_err = document.querySelector('.req-err')
const menuicon = document.querySelector('.menuicon')
const menu = document.querySelector('.menu-container')

const width = window.screen.width

if (width < 500) {
    vk.placeholder = 'Ваша страница ВК'
    req_btn.remove()
    menuicon.addEventListener('click', () => {
        menuicon.classList.add('menuon')
        menu.style.opacity = 1
    })
    document.addEventListener('click', event => {
    let isClickInsideElement = menuicon.contains(event.target);
    if (!isClickInsideElement) {
        menuicon.classList.remove('menuon')
        menu.style.opacity = 0
    }
    })
}

more_btn.addEventListener('click', () => {
    const scr = setInterval(()=>{
        window.scrollBy(0, 10)
        if (scrollY > 1000 && width > 500) {
            clearInterval(scr)
        } else if (scrollY > scrollmob && width <= 500) {
            clearInterval(scr)
        }
    }, 1)
})

req_btn.addEventListener('click', () => {
    const scr = setInterval(()=>{
        window.scrollBy(0, 10)
        if (scrollY > 2030) {
            clearInterval(scr)
        }
    }, 1)
})

req_conf.addEventListener('click', () => {
    if (vk.value != '' && vk.value.includes('https://vk.com/')) {
        const xhr = new XMLHttpRequest()
        let body = {
            vk: '',
        }
        body.vk = vk.value
        body = JSON.stringify(body)
        xhr.open('POST', '/api/vk', true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(body)
        window.scroll(0, 0)
        location.reload()
    } else {
        req_err.innerHTML = 'Некорректно введена ссылка'
    }
})

menuicon.addEventListener('mouseover', () => {
    menuicon.classList.add('menuon')
    menu.style.opacity = 1
})
menu.addEventListener('mouseleave', () => {
    menuicon.classList.remove('menuon')
    menu.style.opacity = 0
})