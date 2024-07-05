const buttomSize1 = document.querySelector(".boton-uno");
const buttomSize2 = document.querySelector(".boton-dos");
const buttomSize3 = document.querySelector(".boton-tres");
const buttomSize4 = document.querySelector(".boton-cuatro");
const buttomSize5 = document.querySelector(".boton-cinco")
const viewSelectSize = document.querySelector(".view-size")
const buttonSize = document.querySelector("[name = 'button-sizes']")
let size = "";

const buttonColor1 = document.getElementById("1");
const buttonColor2 = document.getElementById("2");
const buttonColor3 = document.getElementById("3");
const buttonColor4 = document.getElementById("4");
const buttonColor5 = document.getElementById("5");
const buttonColor6 = document.getElementById("6");
const buttonColor7 = document.getElementById("7");
const buttonColor8 = document.getElementById("8");
const buttonColor9 = document.getElementById("9");
const buttonColor10 = document.getElementById("10");
const buttonColor11 = document.getElementById("11");
const buttonColor12 = document.getElementById("12");
const buttonColor13 = document.getElementById("13");
const buttonColor14 = document.getElementById("14");
const buttonColor15 = document.getElementById("15");
let clickCount = 0;



const changeBorder = (color) => {
  clickCount++
  if(color === "1"){
    if(clickCount %2 ){
        buttonColor1.style.border = "2px solid red"
        buttonColor10.style.border = "1.5px solid black" 
        buttonColor2.style.border = "1.5px solid black"
    } else  {
      buttonColor1.style.border = "1.5px solid black"
      buttonColor10.style.border = "1.5px solid black"
      buttonColor2.style.border = "1.5px solid black"
      
    }
  } else if(color === '10') {
    if(clickCount % 2){
      buttonColor10.style.border = "2px solid red"
      buttonColor12.style.border = "1.5px solid black"
      buttonColor1.style.border = "1.5px solid black"
      buttonColor2.style.border = "1.5px solid black"
      buttonColor12.style.border = "1.5px solid black"
    } else  {
      buttonColor10.style.border = "1.5px solid black"
      buttonColor12.style.border = "1.5px solid black"
      buttonColor2.style.border = "1.5px solid black"
      buttonColor1.style.border = "1.5px solid black"
    }
  } else if(color === '9'){
    if(clickCount % 2){
      buttonColor9.style.border = "2px solid red"
      buttonColor12.style.border = "1.5px solid black"
    } else {
      buttonColor9.style.border = "1.5px solid black"
       buttonColor12.style.border = "1.5px solid black"
    }
  } else if( color === '12'){
    if(clickCount % 2){
      buttonColor12.style.border = "2px solid red"
      buttonColor10.style.border = "1.5px solid black"
      buttonColor9.style.border = "1.5px solid black"
      
    } else {
      buttonColor12.style.border = "1.5px solid black"
      buttonColor10.style.border = "1.5px solid black"
      buttonColor9.style.border = "1.5px solid black"
    }
  } else if(color === '2'){
      if(clickCount % 2){
        buttonColor2.style.border = "2px solid red"
        buttonColor1.style.border = "1.5px solid black"
        buttonColor10.style.border = "1.5px solid black"
        
      } else {
        buttonColor2.style.border = "1.5px solid black"
        buttonColor10.style.border = "1.5px solid black"
        buttonColor1.style.border = "1.5px solid black"
      }
  }
}


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