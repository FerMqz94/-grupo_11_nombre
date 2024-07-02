const buttomSize1 = document.querySelector(".boton-uno");
const buttomSize2 = document.querySelector(".boton-dos");
const buttomSize3 = document.querySelector(".boton-tres");
const buttomSize4 = document.querySelector(".boton-cuatro");
const buttomSize5 = document.querySelector(".boton-cinco")
const viewSelectSize = document.querySelector(".view-size")
const buttonSize = document.querySelector("[name = 'button-sizes']")
let size = "";



const showSize = (size) => {

  if(size === '1'){
    viewSelectSize.innerHTML = buttomSize1.innerHTML;
    buttomSize1.style.border = " 2px solid var(--molocoton-oscuro)";
    buttomSize2.style.border = " 2px solid var(--gris-claro)";
    buttomSize3.style.border = " 2px solid var(--gris-claro)";
    buttomSize4.style.border = " 2px solid var(--gris-claro)";
    buttomSize5.style.border = " 2px solid var(--gris-claro)";
  }  else if(size === '2'){
    viewSelectSize.innerHTML = buttomSize2.innerHTML;
    buttomSize2.style.border = " 2px solid var(--molocoton-oscuro)";
    buttomSize1.style.border = " 2px solid var(--gris-claro)";
    buttomSize3.style.border = " 2px solid var(--gris-claro)";
    buttomSize4.style.border = " 2px solid var(--gris-claro)";
    buttomSize5.style.border = " 2px solid var(--gris-claro)";
  } else if(size === '3'){
    viewSelectSize.innerHTML = buttomSize3.innerHTML;
    buttomSize3.style.border = " 2px solid var(--molocoton-oscuro)";
    buttomSize1.style.border = " 2px solid var(--gris-claro)";
    buttomSize2.style.border = " 2px solid var(--gris-claro)";
    buttomSize4.style.border = " 2px solid var(--gris-claro)";
    buttomSize5.style.border = " 2px solid var(--gris-claro)";
  } else if(size === '4'){
    viewSelectSize.innerHTML = buttomSize4.innerHTML;
    buttomSize4.style.border = " 2px solid var(--molocoton-oscuro)";
    buttomSize1.style.border = " 2px solid var(--gris-claro)";
    buttomSize2.style.border = " 2px solid var(--gris-claro)";
    buttomSize3.style.border = " 2px solid var(--gris-claro)";
    buttomSize5.style.border = " 2px solid var(--gris-claro)";
  } else if(size === '5') {
    viewSelectSize.innerHTML = buttomSize5.innerHTML;
    buttomSize5.style.border = " 2px solid var(--molocoton-oscuro)";
    buttomSize1.style.border = " 2px solid var(--gris-claro)";
    buttomSize2.style.border = " 2px solid var(--gris-claro)";
    buttomSize3.style.border = " 2px solid var(--gris-claro)";
    buttomSize4.style.border = " 2px solid var(--gris-claro)";
  }

}
