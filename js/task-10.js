function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector("input");
const buttonCreate = document.querySelector(`[data-create=""]`);
const buttonDestroy = document.querySelector(`[datd-destoy=""]`);
const boxRend = document.getElementById("boxes");
console.log(buttonCreate);


function createBoxes(param) {

  let size = 30;

  for (let i = 0; i < inputEl.value; i++) {    
      let div = document.createElement(`div`);
      div.style.backgroundColor = getRandomHexColor();
      div.style.height = `${size}px`;
      div.style.width = `${size}px`;
      div.style.margin = `${10}px`;
      boxRend.append(div);
    size += 10;
  }

}
 


buttonCreate.addEventListener("click", () => { createBoxes(inputEl.value) });