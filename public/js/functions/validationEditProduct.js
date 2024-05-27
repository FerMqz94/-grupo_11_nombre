document.addEventListener('DOMContentLoaded', function() {
    const inputName = document.querySelector("[name='name']");
    const inputPrice = document.querySelector("[name='price']");
    const inputDescription = document.querySelector("[name='description']");
    const inputFeaturedDescription = document.querySelector("[name='featuredDescription']");
    const inputImage = document.querySelector("[name='image']");
    const exRegAlfanumeric = /^[a-zA-Z0-9\s]*$/;

    let existError = true;

    const statusInvalid = (elementErr, message, elementInput) => {
        elementErr.innerHTML = message;
        elementInput.classList.add("is-invalid");
        elementInput.classList.remove("is-valid");
        existError = true;
    };

    const statusValid = (elementErr, elementInput) => {
        elementErr.innerHTML = "";
        elementInput.classList.remove("is-invalid");
        elementInput.classList.add("is-valid");
        existError = false;
    };

    const form = document.getElementById('form-edit-product');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if(inputName.value.trim() == ""){
            statusInvalid(document.querySelector(".error-name"), "El nombre es obligatorio", inputName);
        } else if(inputName.value.trim().length <= 2){
            statusInvalid(document.querySelector(".error-name"), "Debe tener al menos 3 caracteres", inputName);
        } else if(!exRegAlfanumeric.test(inputName.value.trim())){
            statusInvalid(document.querySelector(".error-name"), "No debe contener símbolos", inputName);
        } else{
            statusValid(document.querySelector(".error-name"), inputName);
        }

        if(inputPrice.value.trim() == ""){
            statusInvalid(document.querySelector(".error-price"), "El precio es obligatorio", inputPrice);
        } else if(isNaN(inputPrice.value.trim())){
            statusInvalid(document.querySelector(".error-price"), "Debe ingresar un valor numérico", inputPrice);
        } else{
            statusValid(document.querySelector(".error-price"), inputPrice);
        }

        if(inputDescription.value.trim() == ""){
            statusInvalid(document.querySelector(".error-description"), "La descripción es obligatoria", inputDescription);
        } else if(inputDescription.value.trim().length <= 5){
            statusInvalid(document.querySelector(".error-description"), "Debe tener al menos 5 caracteres", inputDescription);
        } else{
            statusValid(document.querySelector(".error-description"), inputDescription);
        }

        if(inputFeaturedDescription.value.trim() == ""){
            statusInvalid(document.querySelector(".error-featuredDescription"), "La descripción destacada es obligatoria", inputFeaturedDescription);
        } else if(inputFeaturedDescription.value.trim().length <= 5){
            statusInvalid(document.querySelector(".error-featuredDescription"), "Debe tener al menos 5 caracteres", inputFeaturedDescription);
        } else{
            statusValid(document.querySelector(".error-featuredDescription"), inputFeaturedDescription);
        }

        const filePath = inputImage.value;
        const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!allowedExtensions.exec(filePath) && filePath.length != 0){
            statusInvalid(document.querySelector(".error-imgs"), "Formato de imagen no valido", inputImage);
        } else if (inputImage.files.length > 3){
            statusInvalid(document.querySelector(".error-imgs"), "No puedes subir más de 3 imágenes", inputImage);
        } else{
            statusValid(document.querySelector(".error-imgs"), inputImage);
        }

        if(!existError){
            form.submit();
        } else{
            document.querySelector(".err-form-general").innerHTML = "Debes solucionar los errores marcados";
        }
    });
});