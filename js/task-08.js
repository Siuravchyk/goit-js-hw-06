const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Попередження перезавантаження сторінки

    const formData = new FormData(loginForm);
    const formDataObject = {};

    formData.forEach((value, name) => {
      formDataObject[name] = value;
    });

    if (!formDataObject.email || !formDataObject.password) {
      alert('Please fill in all fields');
      return;
    }

    console.log(formDataObject); // Вивести об'єкт в консоль
    loginForm.reset(); // Очистити форму
  });
