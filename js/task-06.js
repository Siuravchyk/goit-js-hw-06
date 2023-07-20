const validationInput = document.getElementById('validation-input');

  // Функція для перевірки кількості символів та оновлення стилів
  const checkInputLength = () => {
    const requiredLength = Number(validationInput.dataset.length);
    const currentLength = validationInput.value.length;

    if (currentLength === requiredLength) {
      validationInput.classList.remove('invalid');
      validationInput.classList.add('valid');
    } else {
      validationInput.classList.remove('valid');
      validationInput.classList.add('invalid');
    }
  };

  // Слухач події "blur" на полі вводу
  validationInput.addEventListener('blur', checkInputLength);