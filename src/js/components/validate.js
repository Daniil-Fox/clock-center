import { validateForms } from './../functions/validate-forms.js';
const checks1 = [
  {
    selector: ".checks-group",
  }
];
const checks2 = [
  {
    selector: ".checks-group",
  }
];
const modalRules = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];

const ctaRules = [
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '#form-file',
    rules: [
      {
        rule: 'files',
        value: {
          files: {
            types: ['image/png', 'image/jpg', 'image/jpeg'],
            extensions: ['png', 'jpg', 'jpeg'],
          },
        },
      },
    ]
  }
]
const modalForm = document.querySelector('.modal__form')
const ctaForm = document.querySelector('.cta__form')

const modalContent = document.querySelector('.modal__content')
const ctaContent = document.querySelector('.cta__body')

function renderThanks(container) {
  const send = document.createElement('div')
  const text = document.createElement('p')
  const successIcon = document.createElement('img')
  successIcon.src = './img/check-icon.svg'
  successIcon.classList.add('success-icon')

  send.classList.add('modal__title')
  send.textContent = "Ваша заявка отправлена"

  text.classList.add('modal__desc')
  text.innerHTML = 'Спасибо за ваше обращение!<br>Ожидайте звонка от нашего специалиста в ближайшее время.'

  container.innerHTML = ''
  container.append(successIcon)
  container.append(send)
  container.append(text)
}



if(ctaForm){
  validateForms('.cta__form', ctaRules, checks1, () => renderThanks(ctaContent));
}

if(modalForm){
  validateForms('.modal__form', modalRules, checks2, () => renderThanks(modalContent));
}
