const hMenu = document.querySelector('.h-menu')
const hBody = document.querySelector('.h-menu>.container')

const hMenuBtn = document.querySelectorAll('.nav__item--drop')
const header = document.querySelector('.header')

const headerBottom = document.querySelector('.header__bottom')
const headerLeft = header.querySelector('.nav__left ')
const containers = document.querySelectorAll('.h-menu__container')
hMenuBtn.forEach(btn => {
  const dataset = btn.dataset.nav
  const content = hMenu.querySelector(`.h-menu__container[data-nav-content="${dataset}"]`)
  btn.addEventListener('mouseenter', e => {
    hMenu.style.setProperty('--left-pos', (btn.offsetLeft + btn.clientWidth/2) + 'px')
    e.preventDefault()
    containers.forEach(el => {
      el.classList.remove('active')
    })
    content.classList.add('active')

    hMenu.style.maxHeight = hMenu.scrollHeight + 'px'

    header.classList.add('h-active')
  })
  headerLeft.addEventListener('mouseleave', e => {
    e.preventDefault()
    hMenu.style.maxHeight = null
    header.classList.remove('h-active')
    content.classList.remove('active')
  })
})

document.body.addEventListener('click', e => {
  header.classList.remove('h-active')
})
hBody.addEventListener('click', e => {
  e.stopPropagation()
})
headerBottom.addEventListener('click', e => {
  e.stopPropagation()
})


