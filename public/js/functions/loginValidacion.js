// console.log("vinculado con exito");
window.addEventListener('load', function () {
   const  formulario = document.querySelector(".contenedor-main");
     const emailInput = document.querySelector("[name='email']");
     const inputPassword =document.querySelector("[name='password']");
    const errorEmail = document.querySelector(".error-email");
     const errorPasswor = document.querySelector(".error-password");
//     // const button = document.querySelector(".contenedor-boton-login")
          const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          const passwordRegex =  /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,30}$/
        
// //     function validarEmail(email) {
// //       const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// //       return regex.test(email);
// //     }
// //     function validarPassword(password) {
// //       const passwordRegex = /^.{8,30}$/;
// //       return passwordRegex.test(password);
// //     }
// //     emailInput.addEventListener("blur",function(){
// //       const value = emailInput.value.trim();
// //       if (value.length === 0) {
// //         errorEmail.textContent = 'El campo email es obligatorio';
// //         emailInput.classList.add("is-invalid");
// //         } else if (!validarEmail(value)) {
// //           errorEmail.textContent = 'El formato del email no es válido';
// //         } else {
// //           errorEmail.textContent = '';
// //         }
// //       }) 
// //       inputPassword.addEventListener("blur",function(){
// //         const value = inputPassword.value.trim();
// //         if (value === '') {
// //           errorPasswor.textContent = 'El campo password es obligatorio';
// //         } else if (!validarPassword(value)) {
// //           errorPasswor.textContent = 'El minimo caracter es de 8 ';
// //         } else {
// //           errorPasswor.textContent = '';
// //         }
// //       })
// //     formulario.addEventListener('submit', (e) => {
      
    
    
// //     e.preventDefault();
     
// //       if (errorEmail.textContent === '' && errorPasswor.textContent === '') {
        
// //         formulario.submit();
// //         return true;
// //       }
// //     });
// // })


  let existError = true;
  const statusInvalid = (elementErr, msgErr, elementInput) => {
    elementErr.innerHTML = msgErr;
    elementInput.classList.add("is-invalid");
    elementInput.style.border = "0.1px solid red";
    existError = true;
};

const statusValid = (elementErr, elementInput) => {
    elementErr.innerHTML = null;
    elementInput.classList.add("is-valid");
    elementInput.classList.remove("is-invalid");
    elementInput.style.border = "1.5px solid #b8b8b8"
    existError = false;
  };
//   // const statusInvalid = (elementErr, msgErr, elementInput) => {
//   //   elementErr.innerHTML = msgErr;
//   //   elementInput.classList.add("is-invalid");
//   //   existError = true;
//   // };

//   // const statusValid = (elementErr, elementInput) => {
//   //   elementErr.innerHTML = null;
//   //   elementInput.classList.add("is-valid");
//   //   elementInput.classList.remove("is-invalid");
//   //   existError = false;
//   // };

//   /* VALIDATION INPUT TITLE */

  emailInput.addEventListener("blur", function () {
    const value = this.value.trim();

    switch (true) {
      case !value.length:
        // errTitle.innerHTML = "El titulo es requerido";
        // this.classList.add("is-invalid");
//         // existError = true;
          statusInvalid( errorEmail, "El email es requerido", this);
          break;


      case !regex.test(value):
        // errTitle.innerHTML = "El titulo debe ser alfanumérico";
        // this.classList.add("is-invalid");
        // existError = true;

          statusInvalid( errorEmail , "El email debe ser formato @email", this);
        break;

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



  inputPassword.addEventListener("blur", function () {
    const value = this.value.trim();

    switch (true) {
      case !value.length:
        // errTitle.innerHTML = "El titulo es requerido";
        // this.classList.add("is-invalid");
        // existError = true;
        statusInvalid( errorPasswor, "El password es requerido", this);
        break;

      case !passwordRegex.test(value):
        // errTitle.innerHTML = "El titulo debe ser alfanumérico";
        // this.classList.add("is-invalid");
        // existError = true;

        statusInvalid( errorPasswor , "El password debe tener un mínimo de 8 caracteres", this);
        break;

      default:
        // errTitle.innerHTML = null;
        // this.classList.add("is-valid");
        // this.classList.remove("is-invalid");
        // existError = false;

        statusValid(errorPasswor, this);
        break;
    }
  });

  
  const errFormLogin = document.querySelector(".err-form-login");
  formulario.addEventListener("submit", function (event) {
    const  isEmai =  emailInput.value.trim();    
    
    const iSPassword = inputPassword.value.trim();
  
    event.preventDefault();

    switch (true) {
      case !isEmai: emailInput.style.borderColor="red" 
      case !iSPassword: inputPassword.style.borderColor="red" 
      
  
        existError = true;
    
        errFormLogin.innerHTML = "Por favor, complete los campos de email y password.";
        errFormLogin.classList.add("alert", "alert-danger");
        errorEmail.innerHTML === '' && errorPasswor.textContent === ''
        break;
    }

    if (!existError) {
      this.submit();
    }

  })
})





