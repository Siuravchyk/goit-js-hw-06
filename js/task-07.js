const fontSizeControl = document.getElementById('font-size-control');
  const textSpan = document.getElementById('text');

  // Слухач події "input" на повзунку
  fontSizeControl.addEventListener('input', () => {
    const fontSizeValue = fontSizeControl.value;
    textSpan.style.fontSize = `${fontSizeValue}px`;
  });