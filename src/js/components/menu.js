const menuBtn = document.querySelector('.header__burger')
const menu = document.querySelector('.menu')
const menuBody = document.querySelector('.menu__body')
const menuClose = document.querySelector('.menu__close')

menuBtn?.addEventListener('click', e => {
  e.preventDefault()

  menu.style.opacity = 1
  menu.style.zIndex = 100
  document.body.style.overflow = 'hidden'
  setTimeout(() => {
    menuBody.style.transform = 'translateX(0)'
  }, 300)
})


menuClose?.addEventListener('click', e => {
  e.preventDefault()

  menuBody.style.transform = null
  document.body.style.overflow = null

  setTimeout(() => {
    menu.style.opacity = 0
    menu.style.zIndex = -1
  }, 300)
})
menu?.addEventListener('click', e => {
  e.preventDefault()

  menuBody.style.transform = null
  document.body.style.overflow = null

  setTimeout(() => {
    menu.style.opacity = 0
    menu.style.zIndex = -1
  }, 300)
})

menuBody.addEventListener('click', e => {
  e.stopPropagation()
})
