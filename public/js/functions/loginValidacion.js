// console.log("vinculado con exito");


const inputEmail = document.querySelector("[name='email']");
const inputPassword = document.querySelector("[name='password']");



window.addEventListener('load', function () {
   const  formulario = document.querySelector(".contenedor-main");
    //  const emailInput = document.querySelector("[name='email']");
    //  const inputPassword =document.querySelector("[name='password']");
    // const errorEmail = document.querySelector(".error-email");
    //  const errorPasswor = document.querySelector(".error-password");
//     // const button = document.querySelector(".contenedor-boton-login")
          // const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,16}$/;
        
          const iconErrorEmail = document.querySelector('#icon-email-error');
          const iconErrorPasword = document.querySelector('#icon-password-error');

          const iconValidEmail = document.querySelector('#icon-email-valid');
          const iconValidPassword = document.querySelector('#icon-password-valid');

          initialDisplay(iconErrorEmail)
          initialDisplay(iconValidEmail)
          initialDisplay(iconErrorPasword)
          initialDisplay(iconValidPassword)
        

 /* FUNCTION TO STYLING ERROR INPUTS'S ICONS */
 const displayIconToShowInvalid = (elementIcon, elementIconToHideValid) => {
  elementIcon.style.display = "block";
  elementIcon.style.position = "absolute";
  elementIcon.style.bottom = "40px"
  elementIcon.style.right = "195px"
  elementIcon.style.color = "#bfd0cb";
  elementIcon.style.fontSize = "22px";
  elementIconToHideValid.style.display = "none"
}

/* FUNCTION TO STYLING VALID INPUTS'S ICONS */
const displayIconToShowValid = (elementIcon, elementIconToHideError) => {
  elementIcon.style.display = "block";
  elementIcon.style.position = "absolute";
  elementIcon.style.bottom = "40px"
  elementIcon.style.right = "195px"
  elementIcon.style.color = "var(--verde-azulado-claro)";
  elementIconToHideError.style.display ="none"
}


//FUNCTION FOR BOTH CASES, VALID INPUTS AND INVALID INPUTS

/* INVALID */
const newStyleInputInvalid = (classInput) => {
document.querySelector(classInput).style.border = "2px solid var(--molocoton-oscuro)"
document.querySelector(classInput).style.backgroundColor ="white";

}
const statusInvalid = (elementErr, msgErr, newStyleInputInvalid, classInput) => {
elementErr.innerHTML = msgErr;
newStyleInputInvalid(classInput);
existError = true;
}

/* VALID */

const newStyleInputValid = (classInput) => {
  document.querySelector(classInput).style.border = "none"
  document.querySelector(classInput).style.backgroundColor = "rgba(232, 240, 254, 1)"

}
const statusValid = (elementErr, newStyleInputValid, classInput) => {
  elementErr.innerHTML = null;
  newStyleInputValid(classInput)
  existError = false;
}


//   let existError = true;
//   const statusInvalid = (elementErr, msgErr, elementInput) => {
//     elementErr.innerHTML = msgErr;
//     elementInput.classList.add("is-invalid");
//     elementInput.style.border = "0.1px solid red";
//     existError = true;
// };

// const statusValid = (elementErr, elementInput) => {
//     elementErr.innerHTML = null;
//     elementInput.classList.add("is-valid");
//     elementInput.classList.remove("is-invalid");
//     elementInput.style.border = "1.5px solid #b8b8b8"
//     existError = false;
//   };
  // const EmailError = document.querySelector('.error-email');

  inputEmail.addEventListener('blur', function () {
      
      const value = this.value.trim();
      const emailRegex =  /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  
      switch (true) {
          case !value.length:
              statusInvalid(EmailError, "El email es requerido", newStyleInputInvalid, '.email')
              displayIconToShowInvalid(iconErrorEmail, iconValidEmail)
              break;
          case !emailRegex.test(value):
              statusInvalid(EmailError, "Formato de email inválido", newStyleInputInvalid, '.email')
              displayIconToShowInvalid(iconErrorEmail, iconValidEmail)
          default:
              statusValid(EmailError, newStyleInputValid, '.email');
              displayIconToShowValid(iconValidEmail, iconErrorEmail)
              break;
      }
      
  })
  
  inputEmail.addEventListener("focus", function () {
      initialDisplay(iconValidEmail)
      initialDisplay(iconErrorEmail)
      EmailError.innerHTML = null;
  });
  
  /* END VALIDATION EMAIL */
  
  /* VALIDATION PASSWORD */
  // const passwordError = document.querySelector('.error-password');
  
  inputPassword.addEventListener('blur', function () {
  
      const regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,16}$/;
      const value = this.value.trim();
     
      switch (true) {
          case !value.length:
              statusInvalid(passwordError, "Contraseña requerida", newStyleInputInvalid, '.contrasenia')
              displayIconToShowInvalid(iconErrorPasword, iconValidPassword)
              break;
          case value.length < 8 || value.length > 16:
              statusInvalid(passwordError, "La contraseña debe tener entre 8 y 16 caracteres", newStyleInputInvalid, '.contrasenia')
              displayIconToShowInvalid(iconErrorPasword, iconValidPassword)
              break;
              case !regExPass.test(value):
              statusInvalid(passwordError, "La contraseña debe contener al menos una letra minúscula, una mayúscula, un número y un carácter especial", newStyleInputInvalid, '.contrasenia')
              displayIconToShowInvalid(iconErrorPasword, iconValidPassword)
              break;
          default:
              statusValid(passwordError, newStyleInputValid, '.contrasenia')
              displayIconToShowValid(iconValidPassword, iconErrorPasword)
              break
      }
  })
  
  inputPassword.addEventListener("focus", function () {
      initialDisplay(iconErrorPasword)
      passwordError.innerHTML = null;
  });
  
  /* END VALIDATION PASSWORD */
  
  /* VALIDATION CONFIRMPASSWORD */
  
 

//   /* VALIDATION INPUT TITLE */

//   emailInput.addEventListener("blur", function () {
//     const value = this.value.trim();

//     switch (true) {
//       case !value.length:
//         // errTitle.innerHTML = "El titulo es requerido";
//         // this.classList.add("is-invalid");
// //         // existError = true;
//           statusInvalid( errorEmail, "El email es requerido", this);
//           break;


//       case !regex.test(value):
//         // errTitle.innerHTML = "El titulo debe ser alfanumérico";
//         // this.classList.add("is-invalid");
//         // existError = true;

//           statusInvalid( errorEmail , "El email debe ser formato @email", this);
//         break;

//         break;

//       default:
//         // errTitle.innerHTML = null;
//         // this.classList.add("is-valid");
//         // this.classList.remove("is-invalid");
//         // existError = false;

//         statusValid(errorEmail, this);
//         break;
//     }
//   });



//   inputPassword.addEventListener("blur", function () {
//     const value = this.value.trim();

//     switch (true) {
//       case !value.length:
//         // errTitle.innerHTML = "El titulo es requerido";
//         // this.classList.add("is-invalid");
//         // existError = true;
//         statusInvalid( errorPasswor, "El password es requerido", this);
//         break;

//       case !passwordRegex.test(value):
//         // errTitle.innerHTML = "El titulo debe ser alfanumérico";
//         // this.classList.add("is-invalid");
//         // existError = true;

//         statusInvalid( errorPasswor , "El password debe tener un mínimo de 8 caracteres", this);
//         break;

//       default:
//         // errTitle.innerHTML = null;
//         // this.classList.add("is-valid");
//         // this.classList.remove("is-invalid");
//         // existError = false;

//         statusValid(errorPasswor, this);
//         break;
//     }
//   });

  
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





