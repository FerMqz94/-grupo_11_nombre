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
    viewSelectSize.style.fontSize = "var(--letra-grande)";
    viewSelectSize.style.color = "var(--gris74)";
    buttomSize1.style.border = " 2px solid var(--molocoton-oscuro)";
    buttomSize2.style.border = " 2px solid var(--gris85)";
    buttomSize3.style.border = " 2px solid var(--gris85)";
    buttomSize4.style.border = " 2px solid var(--gris85)";
    buttomSize5.style.border = " 2px solid var(--gris85)";
  }  else if(size === '2'){
    viewSelectSize.innerHTML = buttomSize2.innerHTML;
    buttomSize2.style.border = " 2px solid var(--molocoton-oscuro)";
    viewSelectSize.style.fontSize = "var(--letra-grande)";
    viewSelectSize.style.color = "var(--gris74)";
    buttomSize1.style.border = " 2px solid var(--gris85)";
    buttomSize3.style.border = " 2px solid var(--gris85)";
    buttomSize4.style.border = " 2px solid var(--gris85)";
    buttomSize5.style.border = " 2px solid var(--gris85)";
  } else if(size === '3'){
    viewSelectSize.innerHTML = buttomSize3.innerHTML;
    buttomSize3.style.border = " 2px solid var(--molocoton-oscuro)";
    viewSelectSize.style.fontSize = "var(--letra-grande)";
    viewSelectSize.style.color = "var(--gris74)";
    buttomSize1.style.border = " 2px solid var(--gris85)";
    buttomSize2.style.border = " 2px solid var(--gris85)";
    buttomSize4.style.border = " 2px solid var(--gris85)";
    buttomSize5.style.border = " 2px solid var(--gris85)";
  } else if(size === '4'){
    viewSelectSize.innerHTML = buttomSize4.innerHTML;
    buttomSize4.style.border = " 2px solid var(--molocoton-oscuro)";
    viewSelectSize.style.fontSize = "var(--letra-grande)";
    viewSelectSize.style.color = "var(--gris74)";
    buttomSize1.style.border = " 2px solid var(--gris85)";
    buttomSize2.style.border = " 2px solid var(--gris85)";
    buttomSize3.style.border = " 2px solid var(--gris85)";
    buttomSize5.style.border = " 2px solid var(--gris85)";
  } else if(size === '5') {
    viewSelectSize.innerHTML = buttomSize5.innerHTML;
    viewSelectSize.style.fontSize = "var(--letra-grande)";
    viewSelectSize.style.color = "var(--gris74)";
    buttomSize5.style.border = " 2px solid var(--molocoton-oscuro)";
    buttomSize1.style.border = " 2px solid var(--gris85)";
    buttomSize2.style.border = " 2px solid var(--gris85)";
    buttomSize3.style.border = " 2px solid var(--gris85)";
    buttomSize4.style.border = " 2px solid var(--gris85)";
  }

}


const showMsgNoSize = (size) => {

  if(size === '1'){
    viewSelectSize.innerHTML = "¡Sin stock en este momento!";
    viewSelectSize.style.fontSize = "var(--letra-mediana)";
    viewSelectSize.style.color = "var(--gris-claro)";
    viewSelectSize.style.paddingLeft = "5px";
    buttomSize1.style.border = " 2px solid var(--molocoton-oscuro)";
    buttomSize2.style.border = " 2px solid var(--gris85)";
    buttomSize3.style.border = " 2px solid var(--gris85)";
    buttomSize4.style.border = " 2px solid var(--gris85)";
    buttomSize5.style.border = " 2px solid var(--gris85)";
  }  else if(size === '2'){
    viewSelectSize.innerHTML = "¡Sin stock en este momento!";
    viewSelectSize.style.fontSize = "var(--letra-mediana)";
    viewSelectSize.style.color = "var(--gris-claro)";
    viewSelectSize.style.padding = "5px";
    buttomSize2.style.border = " 2px solid var(--molocoton-oscuro)";
    buttomSize1.style.border = " 2px solid var(--gris85)";
    buttomSize3.style.border = " 2px solid var(--gris85)";
    buttomSize4.style.border = " 2px solid var(--gris85)";
    buttomSize5.style.border = " 2px solid var(--gris85)";
  } else if(size === '3'){
    viewSelectSize.innerHTML = "¡Sin stock en este momento!";
    viewSelectSize.style.fontSize = "var(--letra-mediana)";
    viewSelectSize.style.color = "var(--gris-claro)";
    viewSelectSize.style.padding = "5px";
    buttomSize3.style.border = " 2px solid var(--molocoton-oscuro)";
    buttomSize1.style.border = " 2px solid var(--gris85)";
    buttomSize2.style.border = " 2px solid var(--gris85)";
    buttomSize4.style.border = " 2px solid var(--gris85)";
    buttomSize5.style.border = " 2px solid var(--gris85)";
  } else if(size === '4'){
    viewSelectSize.innerHTML = "¡Sin stock en este momento!";
    viewSelectSize.style.fontSize = "var(--letra-mediana)";
    viewSelectSize.style.color = "var(--gris-claro)";
    viewSelectSize.style.padding = "5px";
    buttomSize4.style.border = " 2px solid var(--molocoton-oscuro)";
    buttomSize1.style.border = " 2px solid var(--gris85)";
    buttomSize2.style.border = " 2px solid var(--gris85)";
    buttomSize3.style.border = " 2px solid var(--gris85)";
    buttomSize5.style.border = " 2px solid var(--gris85)";
  } else if(size === '5') {
    viewSelectSize.innerHTML = "¡Sin stock en este momento!";
    viewSelectSize.style.fontSize = "var(--letra-mediana)";
    viewSelectSize.style.color = "var(--gris-claro)";
    viewSelectSize.style.padding = "5px";
    buttomSize5.style.border = " 2px solid var(--molocoton-oscuro)";
    buttomSize1.style.border = " 2px solid var(--gris85)";
    buttomSize2.style.border = " 2px solid var(--gris85)";
    buttomSize3.style.border = " 2px solid var(--gris85)";
    buttomSize4.style.border = " 2px solid var(--gris85)";
  }

}