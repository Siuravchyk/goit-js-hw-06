 const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  // Функція для оновлення тексту в спані
  const updateNameOutput = () => {
    const name = nameInput.value.trim();
    nameOutput.textContent = name === '' ? 'Anonymous' : name;
  };

  // Слухач події "input" на полі вводу
  nameInput.addEventListener('input', updateNameOutput);

  // Ініціалізуємо спан значенням "Anonymous"
  updateNameOutput();