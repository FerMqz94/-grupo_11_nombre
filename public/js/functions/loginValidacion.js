console.log("vinculado con exito");
window.addEventListener('load', function () {
    // const  formulario = document.querySelector(".contenedor-main");
    const emailInput = document.querySelector("[name='email']");
    // const inputPassword =document.querySelector(".white-bar");
    const errorEmail = document.querySelector(".error-email");
    // const errorPasswor = document.querySelector();
    const button = document.querySelector(".contenedor-boton-login")
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let existError = true;

    const statusInvalid = (elementErr, msgErr, elementInput) => {
      elementErr.innerHTML = msgErr;
      elementInput.classList.add("is-invalid");
      existError = true;
    };
  
    const statusValid = (elementErr, elementInput) => {
      elementErr.innerHTML = null;
      elementInput.classList.add("is-valid");
      elementInput.classList.remove("is-invalid");
      existError = false;
    };
  

    /* VALIDATION INPUT EMAIL */
  
    emailInput .addEventListener("blur", function () {
      const value = this.value.trim();
  
      switch (true) {
        case !value.length:
          // errTitle.innerHTML = "El titulo es requerido";
          // this.classList.add("is-invalid");
          // existError = true;
          statusInvalid(errorEmail , "El email es requerido", this);
          break;
  
        case !emailRegex.test(value):
            
        // if (!emailRegex.test(email)) {
        //     emailInput.('El formato del correo no es válido');
          // errTitle.innerHTML = "El titulo debe ser alfanumérico";
          // this.classList.add("is-invalid");
          // existError = true;
  
          statusInvalid(errorEmail, "El formato de  ser de tipo @email", this);
          break;
  
        default:
          // errTitle.innerHTML = null;
          // this.classList.add("is-valid");
          // this.classList.remove("is-invalid");
          // existError = false;
  
          statusValid(errorEmail, this);
          break;
      }
    });
    button.addEventListener("click",  function (event) {
        event.preventDefault()
    })


   





})
