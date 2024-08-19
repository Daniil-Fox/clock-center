import './_components.js';


const hMenu = document.querySelector('.h-menu')
const hBody = document.querySelector('.h-menu>.container')
const hMenuBtn = document.querySelector('.nav__arrow')
const header = document.querySelector('.header')
const headerBottom = document.querySelector('.header__bottom')

hMenuBtn.addEventListener('click', e => {
  e.preventDefault()

  header.classList.toggle('h-active')
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



const modal = document.querySelector('.modal')
const modalBody = document.querySelector('.modal__body')
const modalClose = document.querySelector('.modal__close')

const modalButtons = document.querySelectorAll('.modal-btn')

modalButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()

    modal.classList.add('active')
  })
})
modalBody.addEventListener('click', e => e.stopPropagation())

modal.addEventListener('click', e => {
  modal.classList.remove('active')
})

modalClose.addEventListener('click', e => {
  modal.classList.remove('active')
})



const inputFile = document.querySelector('#form-file')
const inputFileLabel = document.querySelector('.form-file>span')
console.log(inputFileLabel)
inputFile?.addEventListener('change', e => {
  if(inputFile.value == ""){
    inputFileLabel.textContent = "Прикрепить файлы..."
  } else {
    inputFileLabel.textContent = [...inputFile.files].map(f => f.name).join(', ');
  }
})
