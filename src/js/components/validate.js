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
        rule: 'minFilesCount',
        value: 1,
      },
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

const afterForm = () => {
  alert('Спасибо за заявку! Свяжемся с вами в ближайшее время!')
};

validateForms('.cta__form', ctaRules, checks1, afterForm);
validateForms('.modal__form', modalRules, checks2, afterForm);
