const inputName = document.querySelector("[name='name']");
const inputUsername = document.querySelector("[name='username']");
const inputEmail = document.querySelector("[name='email']");
const inputPassword = document.querySelector("[name='password']");
const inputConfirmPassword = document.querySelector("[name='passwordConfirm']");



window.addEventListener('load', () => {
    let existError = true;

    /* ICON ERROR */
/*    const iconErrorName = document.querySelector("#icon-name-error");
    const iconErrorUser = document.querySelector('#icon-username-error');
    const iconErrorEmail = document.querySelector('#icon-email-error');
    const iconErrorPasword = document.querySelector('#icon-password-error');
    const iconErrorConfirpass = document.querySelector('#icon-confirPass-error')*/
    
    /* ICON VALID */
 /*   const iconValidName = document.querySelector("#icon-name-valid");
    const iconValidUser = document.querySelector('#icon-username-valid');
    const iconValidEmail = document.querySelector('#icon-email-valid');
    const iconValidPassword = document.querySelector('#icon-password-valid');
    const iconValidConfirPassword = document.querySelector('#icon-confirPass-valid')*/

    /* FUNCTION FOR INITIAL DISPLAY OF THE ICONS*/
    /*const initialDisplay = (elementIcon) => {
        elementIcon.style.display = "none";
    }*/

    /*EXECUTION OF INITIAL DISPLAY FUNCTION FOR BOTH ICONS ERROR AND INCONS VALID*/
    /*initialDisplay(iconErrorName)
    initialDisplay(iconValidName)
    initialDisplay(iconErrorUser)
    initialDisplay(iconValidUser)
    initialDisplay(iconErrorEmail)
    initialDisplay(iconValidEmail)
    initialDisplay(iconErrorPasword)
    initialDisplay(iconValidPassword)
    initialDisplay(iconErrorConfirpass)
    initialDisplay(iconValidConfirPassword)*/


    /* FUNCTION TO STYLING ERROR INPUTS'S ICONS */
    /*const displayIconToShowInvalid = (elementIcon, elementIconToHideValid) => {
        elementIcon.style.display = "block";
        elementIcon.style.position = "absolute";
        elementIcon.style.bottom = "40px"
        elementIcon.style.right = "195px"
        elementIcon.style.color = "#bfd0cb";
        elementIcon.style.fontSize = "22px";
        elementIconToHideValid.style.display = "none"
    }*/

    /* FUNCTION TO STYLING VALID INPUTS'S ICONS */
    /*const displayIconToShowValid = (elementIcon, elementIconToHideError) => {
        elementIcon.style.display = "block";
        elementIcon.style.position = "absolute";
        elementIcon.style.bottom = "40px"
        elementIcon.style.right = "195px"
        elementIcon.style.color = "var(--verde-azulado-claro)";
        elementIconToHideError.style.display ="none"
    }*/


    //FUNCTION FOR BOTH CASES, VALID INPUTS AND INVALID INPUTS

    /* INVALID */
    const newStyleInputInvalid = (classInput) => {
    document.querySelector(classInput).style.border = "2px solid var(--molocoton-oscuro)"
    document.querySelector(classInput).style.backgroundColor ="white";
   
   /* document.querySelector(classInput).classInput.remove('is-valid')*/
    }
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
    }

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
            document.querySelector(classInput).classList.add('is-valid')
            document.querySelector(classInput).classList.remove('is-invalid')
        }
    }

/* --------------------------VALIDATIONS-------------------------------- */
  /* VALIDATION INPUT NAME */
  const nameError = document.querySelector('.error-name')

    inputName.addEventListener('blur', function () {
        const value = this.value.trim();
        const nameRegex = /^[A-Za-z0-9\s]+$/g;
        switch (true) {
            case !value.length:
                statusInvalid(nameError, "El nombre es requerido", newStyleInputInvalid, '.nombreApellido')
                /*displayIconToShowInvalid(iconErrorName, iconValidName)*/
                break;
            case !nameRegex.test(value):
                statusInvalid(nameError, "Los nombres y apellidos deben ser carácteres alfanuméricos", newStyleInputInvalid, '.nombreApellido')
               /* displayIconToShowInvalid(iconErrorName, iconValidName)*/
                break;
            case value.length < 4 || value.length > 20:
                statusInvalid(nameError, "Debe tener entre 4 y 20 caracteres", newStyleInputInvalid, '.nombreApellido')
               /* displayIconToShowInvalid(iconErrorName, iconValidName)*/
            break;
            default:
                statusValid(nameError, newStyleInputValid, '.nombreApellido')
              /*  displayIconToShowValid(iconValidName, iconErrorName)*/
                break;
        }

    })

    inputName.addEventListener("focus", function () {
        initialDisplay(iconErrorName)
        nameError.innerHTML = null;
    });

/* END VALIDATION NAME */

/* VALIDATION USERNAME */
const usernameError = document.querySelector('.error-username');

inputUsername.addEventListener('blur', function () {

    const value = this.value.trim();
    const usernameRegex = /^[A-Za-z0-9\s]+$/g;
    switch (true) {
        case !value.length:
            statusInvalid(usernameError, "Nombre de usuario requerido",  newStyleInputInvalid, '.nombreDeCuenta');
          /*  displayIconToShowInvalid(iconErrorUser, iconValidUser)*/
            break;
        case value.length < 4 || value.length > 20:
            statusInvalid(usernameError, "Debe tener entre 4 y 20 caracteres" , newStyleInputInvalid, '.nombreDeCuenta');
           /* displayIconToShowInvalid(iconErrorUser, iconValidUser);*/
            break;
        case !usernameRegex.test(value):
            statusInvalid(usernameError, "El nombre de usuari@ debe ser alfanumérico" , newStyleInputInvalid, '.nombreDeCuenta');
           /* displayIconToShowInvalid(iconErrorUser, iconValidUser);*/
             break;
        default:
            statusValid(usernameError, newStyleInputValid, '.nombreDeCuenta');
           /* displayIconToShowValid(iconValidUser, iconErrorUser)*/
            break;
    }
    
})

inputUsername.addEventListener("focus", function () {
    initialDisplay(iconErrorUser)
    usernameError.innerHTML = null;
});

/* END VALIDATION USERNAME */

/* VALIDATION EMAIL */
const EmailError = document.querySelector('.error-email');

inputEmail.addEventListener('blur', function () {
    
    const value = this.value.trim();
    /*const emailRegex =  /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;*/

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    switch (true) {
        case !value.length:
            statusInvalid(EmailError, "El email es requerido", newStyleInputInvalid, '.email')
          /*  displayIconToShowInvalid(iconErrorEmail, iconValidEmail)*/
            break;
        case !emailRegex.test(value):
            statusInvalid(EmailError, "Formato de email inválido", newStyleInputInvalid, '.email')
           /* displayIconToShowInvalid(iconErrorEmail, iconValidEmail)*/
            break;
        default:
            statusValid(EmailError, newStyleInputValid, '.email');
           /* displayIconToShowValid(iconValidEmail, iconErrorEmail)*/
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
const passwordError = document.querySelector('.error-password');

inputPassword.addEventListener('blur', function () {

    const regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,16}$/;
    const value = this.value.trim();
   
    switch (true) {
        case !value.length:
            statusInvalid(passwordError, "Contraseña requerida", newStyleInputInvalid, '.contrasenia')
           /* displayIconToShowInvalid(iconErrorPasword, iconValidPassword)*/
            break;
        case value.length < 8 || value.length > 16:
            statusInvalid(passwordError, "La contraseña debe tener entre 8 y 16 caracteres", newStyleInputInvalid, '.contrasenia')
            /*displayIconToShowInvalid(iconErrorPasword, iconValidPassword)*/
            break;
            case !regExPass.test(value):
            statusInvalid(passwordError, "La contraseña debe contener al menos una letra minúscula, una mayúscula, un número y un carácter especial", newStyleInputInvalid, '.contrasenia')
          /*  displayIconToShowInvalid(iconErrorPasword, iconValidPassword)*/
            break;
        default:
            statusValid(passwordError, newStyleInputValid, '.contrasenia')
           /* displayIconToShowValid(iconValidPassword, iconErrorPasword)*/
            break
    }
})

inputPassword.addEventListener("focus", function () {
    initialDisplay(iconErrorPasword)
    passwordError.innerHTML = null;
});

/* END VALIDATION PASSWORD */

/* VALIDATION CONFIRMPASSWORD */

const passwordConfirmError = document.querySelector('.error-passwordConfirm');

inputConfirmPassword.addEventListener('blur', function () {

    const value = this.value.trim();
    const valueP = inputPassword.value.trim();
    //let passwordConfirmClass = document.querySelector('.contraseniaConfirRegister #contraseniaConfir');
    
    switch (true) {
        case !value.length:
            statusInvalid(passwordConfirmError, "La confirmación de la constaseña es requerida", newStyleInputInvalid, '.contraseniaConfir')
         /*   displayIconToShowInvalid(iconErrorConfirpass, iconValidConfirPassword)*/
            break;
        case value.length < 8 || value.length > 16:
            statusInvalid(passwordConfirmError, "La contraseña debe tener entre 8 y 16 caracteres", newStyleInputInvalid, '.contraseniaConfir')
          /*  displayIconToShowInvalid(iconErrorConfirpass, iconValidConfirPassword)*/
            break;
            case value !== valueP:
            statusInvalid(passwordConfirmError, "¡La contraseña no coincide con la anterior! Sigue participando", newStyleInputInvalid, '.contraseniaConfir')
         /*   displayIconToShowInvalid(iconErrorConfirpass, iconValidConfirPassword)*/
            break;
            default:
            statusValid(passwordConfirmError, newStyleInputValid, '.contraseniaConfir')
          /*  displayIconToShowValid(iconValidConfirPassword, iconErrorConfirpass)*/
            break;
    }
    
})

/*inputConfirmPassword.addEventListener("focus", function () {
    initialDisplay(iconErrorConfirpass)
    passwordConfirmError.innerHTML = null;
});*/

/* END VALIDATION CONFIRMPASSWORD */

/* FORM VALIDATION AND EVENT */

const formRegister = document.querySelector('.validation-form-register');
const invalidForm = document.querySelector('.invalid-form')
const fieldsRequired = document.querySelectorAll(".field-required");

  //const errFormGeneral = document.querySelector(".err-form-general");
 
  formRegister.addEventListener("submit", function (event) {
  

    const isName = inputName.value?.trim();
    const isUserName = inputUsername.value?.trim();
    const isEmail = inputEmail.value?.trim();
    const isPassword = inputPassword.value?.trim();
    const isConfirmPass = inputConfirmPassword.value?.trim();
    event.preventDefault();

    switch (true) {
      case !isName:
      case !isUserName:
      case !isEmail:
      case !isPassword:
      case !isConfirmPass:
        existError = true;
        invalidForm.innerHTML = "Revisa los campos con errores 💔"
        break;
    }

    if (!existError) {
      this.submit();
    }
  });
});



