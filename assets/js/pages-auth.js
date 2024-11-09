/**
 *  Pages Authentication
 */

'use strict';
const formAuthentication = document.querySelector('#formAuthentication');

document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    // Form validation for Add new record
    if (formAuthentication) {
      const fv = FormValidation.formValidation(formAuthentication, {
        fields: {
          username: {
            validators: {
              notEmpty: {
                message: 'Por favor, insira o nome de usuário'
              },
              stringLength: {
                min: 6,
                message: 'O nome de usuário deve ter mais de 6 caracteres'
              }
            }
          },
          email: {
            validators: {
              notEmpty: {
                message: 'Por favor, insira seu e-mail'
              },
              emailAddress: {
                message: 'Por favor, insira um endereço de e-mail válido'
              }
            }
          },
          'email-username': {
            validators: {
              notEmpty: {
                message: 'Por favor, insira seu e-mail / nome de usuário'
              },
              stringLength: {
                min: 6,
                message: 'O nome de usuário deve ter mais de 6 caracteres'
              }
            }
          },
          password: {
            validators: {
              notEmpty: {
                message: 'Por favor, digite sua senha'
              },
              stringLength: {
                min: 8,
                message: 'A senha deve ter mais de 8 caracteres'
              }
            }
          },
          'confirm-password': {
            validators: {
              notEmpty: {
                message: 'Por favor, confirme a senha'
              },
              identical: {
                compare: function () {
                  return formAuthentication.querySelector('[name="password"]').value;
                },
                message: 'A senha e sua confirmação não são as mesmas'
              },
              stringLength: {
                min: 8,
                message: 'A senha deve ter mais de 8 caracteres'
              }
            }
          },
          terms: {
            validators: {
              notEmpty: {
                message: 'Por favor, concorde com os termos e condições'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.mb-6'
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),

          defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
          autoFocus: new FormValidation.plugins.AutoFocus()
        },
        init: instance => {
          instance.on('plugins.message.placed', function (e) {
            if (e.element.parentElement.classList.contains('input-group')) {
              e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
            }
          });
        }
      });
    }

    //  Two Steps Verification
    const numeralMask = document.querySelectorAll('.numeral-mask');

    // Verification masking
    if (numeralMask.length) {
      numeralMask.forEach(e => {
        new Cleave(e, {
          numeral: true
        });
      });
    }
  })();
});
