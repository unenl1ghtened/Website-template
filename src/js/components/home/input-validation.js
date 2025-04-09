export const useInputValidation = () => {
  const userNameEl = document.querySelector('#first-name');
  const lastNameEl = document.querySelector('#last-name');
  const emailEl = document.querySelector('#email');
  const phoneEl = document.querySelector('#phone');

  const form = document.querySelector('#form');

  const checkUsername = () => {
    let valid = false;

    // минимальная длинна имени
    const min = 3,
      max = 25;

    // сохраняем значение имени и фамилии в переменную, убирая лишние пробелы
    const username = userNameEl.value.trim();

    if (!isRequired(username)) {
      showError(userNameEl, 'Usename cannot be blank');
    } else if (!isBetween(username.length, min, max)) {
      showError(
        userNameEl,
        `Username must be between ${min} and ${max} characters.`,
      );
    } else {
      valid = true;
    }
    return valid;
  };

  const checkUserSurname = () => {
    let valid = false;

    const min = 3,
      max = 25;

    const lastname = lastNameEl.value.trim();

    if (!isRequired(lastname)) {
      showError(lastNameEl, 'Usename cannot be blank');
    } else if (!isBetween(lastname.length, min, max)) {
      showError(
        lastNameEl,
        `Username must be between ${min} and ${max} characters.`,
      );
    } else {
      valid = true;
    }
    return valid;
  };

  const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
      showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
      showError(emailEl, 'Email is not valid.');
    } else {
      valid = true;
    }
    return valid;
  };

  const checkPhone = () => {
    let valid = false;
    const phone = phoneEl.value.trim();

    const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    if (!isRequired(phone)) {
      showError(phoneEl, 'The phone number field cannot be empty.');
    } else if (phone.length < 8 || phone.length > 16) {
      showError(
        phoneEl,
        'The phone number must contain between 8 and 16 characters.',
      );
    } else if (!phoneRegex.test(phone)) {
      showError(
        phoneEl,
        'The phone number format is invalid. Please enter a valid number.',
      );
    } else {
      valid = true;
    }
    return valid;
  };

  const isEmailValid = (email) => {
    // задаем правила для проверки email

    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const isRequired = (value) => (value === '' ? false : true);

  //   если длина меньше минимального или больше максимального значения, функция возвращает false (проверка не пройдена).
  // если длина находится в диапазоне [min, max], функция возвращает true (проверка пройдена).
  const isBetween = (length, min, max) =>
    length < min || length > max ? false : true;

  const showError = (input, message) => {
    const formField = input.closest('.get-started__form-label');
    // добавляем классы удача или ошибка
    input.classList.remove('get-started__form-input--success');
    input.classList.add('get-started__form-input--error');

    // высвечивает ошибку
    const error = formField.querySelector('.get-started__form-label-error');
    error.textContent = message;
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // валидация форм
    let isUsernameValid = checkUsername(),
      isEmailValid = checkEmail(),
      isLastNameValid = checkUserSurname(),
      isPhoneValid = checkPhone();

    let isFormValid =
      isUsernameValid && isEmailValid && isLastNameValid && isPhoneValid;

    if (isFormValid) {
      console.log('the form is valid');
    }
  });

  // позволяет вызывать функцию только после того, как прошло определённое время (delay) с момента последнего вызова
  const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
      // удаляем предыдущий таймер
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      // добавляем новый таймер
      timeoutId = setTimeout(() => {
        fn.apply(null, args);
      }, delay);
    };
  };

  // запуск проверки
  form.addEventListener(
    'input',
    debounce(function (e) {
      switch (e.target.id) {
        case 'first-name':
          checkUsername();
          break;
        case 'last-name':
          checkUserSurname();
          break;
        case 'email':
          checkEmail();
          break;
        case 'phone':
          checkPhone();
          break;
      }
    }),
  );
};
