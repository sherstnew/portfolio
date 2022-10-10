const about_first = document.querySelector('.about_first')
const about_second = document.querySelector('.about_second')

document.addEventListener('scroll', () => {
    if (scrollY > 200 && scrollY < 400) {
        about_first.style.opacity = '0.5'
        about_second.style.opacity = '0.7'
    } else if (scrollY > 400) {
        about_first.style.opacity = '0.1'
        about_second.style.opacity = '1'
    } else if (scrollY < 200) {
        about_first.style.opacity = '1'
        about_second.style.opacity = '0.1'
    }
})