const inputName = document.querySelector("[name='name']");
const inputUsername = document.querySelector("[name='username']");
const inputEmail = document.querySelector("[name='email']");
const inputPassword = document.querySelector("[name='password']");
const inputConfirmPassword = document.querySelector("[name='passwordConfirm']");

window.addEventListener('load', function () {

    let existError = true;

    inputName.addEventListener('input', function () {

        let existError = true;
        const value = inputName.value.trim();
        // const errName = document.querySelector('#errName');

        // validacion de name

        let nameClass = document.querySelector('.nombreApellidoRegister #nombreApellido');
        let nameError = document.querySelector('.error-name');
        switch (true) {
            case value.length === 0:
                nameClass.style.border = "1.8px solid red";
                nameError.innerHTML = "Nombre de usuario requerido";
                existError = true

                break;
            case value.length <= 3:
                nameClass.style.border = "1.8px solid red";
                nameError.innerHTML = "Debe contener al menos 4 caracteres";
                existError = true

                break;
                case value.length > 20:
                nameClass.style.border = "1.8px solid red";
                nameError.innerHTML = "No puede tener más de 20 caracteres";
                existError = true

                break;

            default:
                nameClass.style.border = "1.8px solid #b8b8b8"
                nameError.innerHTML = null
                existError = false
                break
        }
        
    })

    inputUsername.addEventListener('input', function () {

        let existError = true;
        const value = inputUsername.value.trim();

        let nameClass = document.querySelector('.nombreDelaCuentaRegister #nombreDeCuenta');
        let usernameError = document.querySelector('.error-username');
        switch (true) {
            case value.length === 0:
                nameClass.style.border = "1.8px solid red";
                usernameError.innerHTML = "Nombre de usuario requerido";
                existError = true

                break;
            case value.length <= 3:
                nameClass.style.border = "1.8px solid red";
                usernameError.innerHTML = "Debe contener al menos 4 caracteres";
                existError = true

                break;
                case value.length > 20:
                nameClass.style.border = "1.8px solid red";
                usernameError.innerHTML = "No puede tener más de 20 caracteres";
                existError = true

                break;

            default:
                nameClass.style.border = "1.8px solid #b8b8b8";
                usernameError.innerHTML = null
                existError = false
                break
        }
        
    })

    inputEmail.addEventListener('input', function () {

        // let existError = true;
        const value = inputEmail.value.trim();
        const emailRegex = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

        let nameClass = document.querySelector('.emailregistro #email');
        let EmailError = document.querySelector('.error-email');
        switch (true) {
            case value.length === 0:
                nameClass.style.border = "1.8px solid red";
                EmailError.innerHTML = "Email requerido";
                existError = true

                break;
            // case !emailRegex.test(value):
            //     nameClass.style.border = "1.8px solid red";
            //     EmailError.innerHTML = "Formato de email inválido";
            //     existError = true


                break;
            default:
                nameClass.style.border = "1.8px solid #b8b8b8";
                EmailError.innerHTML = null
                existError = false

                break
        }
        
    })

// let existErrorPassword = true
//     inputPassword.addEventListener('input', function () {

        
//         const value = inputPassword.value.trim();
//         // const errName = document.querySelector('#errName');

//         let nameClass = document.querySelector('.contraseniaRegister #contrasenia');
//         let passwordError = document.querySelector('.error-password');
//         switch (true) {
//             case value.length === 0:
//                 nameClass.style.border = "1.8px solid red";
//                 passwordError.innerHTML = "Campo requerido";
//                 existErrorPassword = true

//                 break;
//             case value.length <= 7:
//                 nameClass.style.border = "1.8px solid red";
//                 passwordError.innerHTML = "La contraseña debe tener al menos 8 caracteres";
//                 existErrorPassword = true

//                 break;
//                 case value.length > 16:
//                 nameClass.style.border = "1.8px solid red";
//                 passwordError.innerHTML = "La contraseña no debe tener más de 16 caracteres";
//                 existErrorPassword = true

//                 break;

//             default:
//                 nameClass.style.border = "1.8px solid #b8b8b8"
//                 passwordError.innerHTML = null
//                 existErrorPassword = false
//                 break
//         }
        
//     })
// let existErrorConfirmPassword = true;
//     inputConfirmPassword.addEventListener('input', function () {

//         // let existErrorConfirmPassword = true;

//         const value = inputConfirmPassword.value.trim();
//         const valueP = inputPassword.value.trim();
//         // const errName = document.querySelector('#errName');


//         let passwordConfirmClass = document.querySelector('.contraseniaConfirRegister #contraseniaConfir');
//         let passwordError = document.querySelector('.error-passwordConfirm');
//         switch (true) {
//             case value.length === 0:
//                 passwordConfirmClass.style.border = "1.8px solid red";
//                 passwordError.innerHTML = "Campo requerido";
//                 existErrorConfirmPassword = true

//                 break;
//             case value.length <= 7:
//                 passwordConfirmClass.style.border = "1.8px solid red";
//                 passwordError.innerHTML = "La contraseña debe tener al menos 8 caracteres";
//                 existErrorConfirmPassword = true

//                 break;
//                 case value.length > 16:
//                     passwordConfirmClass.style.border = "1.8px solid red";
//                 passwordError.innerHTML = "La contraseña no debe tener más de 16 caracteres";
//                 existErrorConfirmPassword = true

//                 break;
//                 case value !== valueP:
//                     passwordConfirmClass.style.border = "1.8px solid red";
//                 passwordError.innerHTML = "Las contraseñas no coinciden";
//                 existErrorConfirmPassword = true

//                 break;

//                 // case s :
//                 // break;

//             default:
//                 passwordConfirmClass.style.border = "1.8px solid #b8b8b8"
//                 passwordError.innerHTML = null
//                 existError = false
//                 break
//         }
        
//     })



    const formUser = document.querySelector('#user-form');
    formUser.addEventListener("submit", function(event){

// event.preventDefault();
        if (existError === false 
            // && existErrorPassword === false && existError === false
        ) {
            this.submit();
          } else {
            event.preventDefault();
          }
    })



})