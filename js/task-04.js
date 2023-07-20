 
let counterValue = 0;
  const valueSpan = document.getElementById('value');
  const incrementBtn = document.querySelector('[data-action="increment"]');
  const decrementBtn = document.querySelector('[data-action="decrement"]');

  // Функція для оновлення значення лічильника і інтерфейсу
  const updateCounter = () => {
    valueSpan.textContent = counterValue;
  };

  // Слухач для кнопки збільшення значення
  incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    updateCounter();
  });

  // Слухач для кнопки зменшення значення
  decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateCounter();
  });

  // Ініціалізуємо лічильник
updateCounter(); 