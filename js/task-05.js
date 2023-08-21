const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');


const updateNameOutput = () => {
  const name = nameInput.value.trim();
  nameOutput.textContent = name === '' ? 'Anonymous' : name;
};


nameInput.addEventListener('input', updateNameOutput);
