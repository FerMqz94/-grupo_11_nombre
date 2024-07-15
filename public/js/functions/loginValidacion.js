// console.log("vinculado con exito");
window.addEventListener('load', function () {
   const  formulario = document.querySelector(".contenedor-main");
   const emailInput = document.querySelector("[name='email']");
   const inputPassword =document.querySelector("[name='password']");
   const errorEmail = document.querySelector(".error-email");
   const errorPasswor = document.querySelector(".error-password");
//     // const button = document.querySelector(".contenedor-boton-login")
          const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,16}$/;
          const regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,16}$/;
          
        
// //   

/* ESTAS DOS SON LAS FUNCIONES QUE ESTABAN ANTES
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
  }; */ 
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

/*---------------FUNCIONES DEL REGISTER QUE TRAIGO ACÁ PARA ADAPTARLAS--------------------- */
 /* INVALID */
 /*const newStyleInputInvalid = (classInput) => {
  document.querySelector(classInput).style.border = "2px solid var(--molocoton-oscuro)"
  document.querySelector(classInput).style.backgroundColor ="white";*/
 
 /* document.querySelector(classInput).classInput.remove('is-valid')*/
  /*}
  const statusInvalid = (elementErr, msgErr, newStyleInputInvalid, classInput) => {
  elementErr.innerHTML = msgErr;
  newStyleInputInvalid(classInput);
  existError = true;
      if(existError){
          document.querySelector(classInput).classList.add('is-invalid')
      } else {
          document.querySelector(classInput).classList.remove('is-invalid')
          document.querySelector(classInput).classList.add('is-valid')
      }
  }*/

      const newStyleInputInvalid = (classInput) => {
        const inputElement = document.querySelector(classInput);
        inputElement.style.border = "2px solid var(--molocoton-oscuro)";
        inputElement.style.backgroundColor = "white";
        inputElement.classList.remove('is-valid'); // Asegúrate de eliminar is-valid
      };
      
      const statusInvalid = (elementErr, msgErr, newStyleInputInvalid, classInput) => {
        elementErr.innerHTML = msgErr;
        newStyleInputInvalid(classInput);
        existError = true; // Asegúrate de que existError esté definido en el contexto adecuado
        
        if (existError) {
          document.querySelector(classInput).classList.add('is-invalid');
        } else {
          document.querySelector(classInput).classList.remove('is-invalid');
          document.querySelector(classInput).classList.add('is-valid');
        }
      };




  /* VALID */

  const newStyleInputValid = (classInput) => {
      document.querySelector(classInput).style.border = "none"
      document.querySelector(classInput).style.backgroundColor = "rgba(232, 240, 254, 1)"
   /*   document.querySelector(classInput).classList.toggle("is-valid")*/
     /* document.querySelector(classInput).classInput.remove("is-invalid")*/
  }
  const statusValid = (elementErr, newStyleInputValid, classInput) => {
      elementErr.innerHTML = null;
      newStyleInputValid(classInput)
      existError = false;

      if(existError === false){
          document.querySelector(classInput).classList.remove('is-invalid')
          document.querySelector(classInput).classList.add('is-valid')
      }
  }




//   /* VALIDATION INPUT TITLE */

  emailInput.addEventListener("blur", function () {
    const value = this.value.trim();

    switch (true) {
      case !value.length:
        // errTitle.innerHTML = "El titulo es requerido";
        // this.classList.add("is-invalid");
//         // existError = true;
         /* statusInvalid( errorEmail, "El email es requerido", this);*/
          statusInvalid(errorEmail, "El email es requerido", newStyleInputInvalid, '.input-email-login')
          break;


      case !regex.test(value):
        // errTitle.innerHTML = "El titulo debe ser alfanumérico";
        // this.classList.add("is-invalid");
        // existError = true;

          //statusInvalid( errorEmail , "El email debe ser formato @email", this);
          statusInvalid(errorEmail, "El email debe ser formato @email", newStyleInputInvalid, '.input-email-login')
        break;

      default:
        // errTitle.innerHTML = null;
        // this.classList.add("is-valid");
        // this.classList.remove("is-invalid");
        // existError = false;

       // statusValid(errorEmail, this);
        statusValid(errorEmail, newStyleInputValid, '.input-email-login')
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
       // statusInvalid( errorPasswor, "El password es requerido", this);
        statusInvalid(errorPasswor, "El password es requerido", newStyleInputInvalid, '.input-pass-login')
        break;

      case value.length < 8 || value.length > 16:
        statusInvalid(errorPasswor, "El password debe tener  entre 8 y 16 caracteres", newStyleInputInvalid, '.input-pass-login')
        break;
        
      case !regExPass.test(value):
        // errTitle.innerHTML = "El titulo debe ser alfanumérico";
        // this.classList.add("is-invalid");
        // existError = true;

        //statusInvalid( errorPasswor , "El password debe tener un mínimo de 8 caracteres", this);
        statusInvalid(errorPasswor, "La contraseña debe contener al menos una letra minúscula, una mayúscula, un número y un carácter especial", newStyleInputInvalid, '.input-pass-login')
        break;

      default:
        // errTitle.innerHTML = null;
        // this.classList.add("is-valid");
        // this.classList.remove("is-invalid");
        // existError = false;

        //statusValid(errorPasswor, this);
        statusValid(errorPasswor, newStyleInputValid, '.input-pass-login')
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





