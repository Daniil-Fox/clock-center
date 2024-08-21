import './_components.js';

import { Fancybox } from "./../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.esm.js";




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
const addedFilesContainer = document.querySelector('.added-files')
console.log(inputFileLabel)
inputFile?.addEventListener('change', e => {
  if(inputFile.value == ""){
    inputFileLabel.textContent = "Прикрепить файлы..."
  } else {
    addedFilesContainer.innerHTML = '';
    [...inputFile.files].forEach(file => {

      addedFilesContainer.append(createAddedFile(file))
    })
  }
})

addedFilesContainer?.addEventListener('click', e => {
  if(e.target.classList.contains('added-files__times')){
    const parent = e.target.closest('li');
    const name = parent.querySelector('span').textContent;
    const arr = [...inputFile.files];
    let idx = -1;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].name == name){
        idx = i;
        break;
      }
    }
    if(idx != -1){
      arr.slice(idx, 1);
      parent.remove()
    }
    idx = -1;
    function fileListFrom (files) {
      const b = new ClipboardEvent("").clipboardData || new DataTransfer()
      for (const file of files) b.items.add(file)
      return b.files
    }
    const fileList = fileListFrom(arr)
    inputFile.files = fileList
  }
})

function createAddedFile(file){
  const liCont = document.createElement('li')
  liCont.dataset.id = file.name

  const nameCont = document.createElement('span')
  nameCont.textContent = file.name;

  const closeBtn = document.createElement('div')
  closeBtn.classList.add('added-files__times')
  closeBtn.innerHTML = '&times;'

  liCont.append(nameCont)
  liCont.append(closeBtn)


  return liCont;
}


Fancybox.bind('[data-fancybox="main"]', {});
Fancybox.bind('[data-fancybox="about"]', {});
