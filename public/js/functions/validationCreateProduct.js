const inputName = document.querySelector("[name='name']");
const inputPrice = document.querySelector("[name='price']");
const inputCategory = document.querySelector("[name='category']");
const inputDescription = document.querySelector("[name='description']");
const inputFeaturedDescription = document.querySelector("[name='featuredDescription']");

// TALLES
const inputSizes = document.querySelectorAll("[name^='talle']");

// COLORES
const inputColors = document.querySelectorAll("[name^='color']");

const inputAveriable = document.querySelector("[name='available']");
const inputImage = document.querySelector("[name='image']");
const exRegAlfanumeric = /^[a-zA-Z0-9\s]*$/;

window.addEventListener('load', function(){
    let existError = true;

    const invalid = (eError, msgErr, eInput) => {
      eError.innerHTML = msgErr;
      eInput.classList.add("is-invalid");
      eInput.style.border = "0.1px solid red";
      existError = true;
  };

  const valid = (eError, eInput) => {
      eError.innerHTML = null;
      eInput.classList.add("is-valid");
      eInput.classList.remove("is-invalid");
      eInput.style.border = "1.5px solid #b8b8b8"
      existError = false;
    };

///////////////////////////////////////////////////////////////
      /* VALIDATION INPUT NAME */
  const errName = document.querySelector(".error-name");
  inputName.addEventListener("blur", function () {
    const value = this.value.trim();
    switch (true) {
        case !value.length:
            invalid(errName, "El nombre es requerido", this);
            break;  
        case !exRegAlfanumeric.test(value):
            invalid(errName, "El nombre debe ser alfanumérico", this);
            break;
        case value.length < 5 || value.length > 100:
            invalid(errTitle,"El nombre debe tener un mínimo de 5 caracteres", this);
            break;
        default:
            valid(errName, this);
            break;
    }
    });

    inputName.addEventListener("focus", function () {
        this.classList.remove("is-valid");
        this.classList.remove("is-invalid");
        errName.innerHTML = null;
    });
    /* END VALIDATION INPUT NAME */

///////////////////////////////////////////////////////////////
    /* VALIDATION INPUT PRICE */

    const errPrice = document.querySelector(".error-price");
    inputPrice.addEventListener("blur", function () {
      const value = this.value.trim();
      switch (true) {
        case !value.length:
          invalid(errPrice, "El precio es requerido", this);
          break;
  
        case isNaN(value):
          invalid(errPrice, "El precio debe ser numérico", this);
          break;
  
        case value < 0:
          invalid(errPrice, "El precio debe tener un valor positivo", this);
          break;
  
        default:
          valid(errPrice, this);
          break;
      }
    });
  
    inputPrice.addEventListener("focus", function () {
      this.classList.remove("is-valid");
      this.classList.remove("is-invalid");
      errPrice.innerHTML = null;
    });

    /* END VALIDATION INPUT PRICE */


///////////////////////////////////////////////////////////////
    /* VALIDATION INPUT CATEGORY */
    inputCategory.addEventListener("blur", function () {
    const errCategory = document.querySelector(".error-category");
    if (!this.value || this.value === "Categorías de producto") {      
        invalid(errCategory, "La categoría es requerida", this);
    } else {
        valid(errCategory, this);
    }
});
/* END VALIDATION INPUT CATEGORY */



///////////////////////////////////////////////////////////////
     /* VALIDATION INPUT DESCRIPTION */
    const errDescription = document.querySelector(".error-description");
    inputDescription.addEventListener("blur", function () {
    const value = this.value.trim();

    switch (true) {
      case !value.length:
        invalid(errDescription, "La descripción es requerida", this);
        break;
      case value.length < 10 || value.length > 100:
        invalid(errDescription, "La descripción debe tener un mínimo de 10 y un tamaño de 100 caracteres", this);
        break;
      default:
        valid(errDescription, this);
        break;
    }
  });

  inputDescription.addEventListener("focus", function () {
    this.classList.remove("is-valid");
    this.classList.remove("is-invalid");
    errDescription.innerHTML = null;
  });
        /* END VALIDATION INPUT DESCRIPTION */



        
///////////////////////////////////////////////////////////////
       /* VALIDATION INPUT DESCRIPTION DESTACADA */
       const errFeaturedDescription = document.querySelector(".error-featuredDescription");
       inputFeaturedDescription.addEventListener("blur", function () {
       const value = this.value.trim();
   
       switch (true) {
         case !value.length:
          invalid(errFeaturedDescription, "La descripción destacada es requerida", this);
           break;
         case value.length < 5 || value.length > 100:
          invalid(errFeaturedDescription, "La descripción destacada debe tener un mínimo de 5 y un tamaño de 100 caracteres", this);
           break;
   
         default:
           valid(errFeaturedDescription, this);
           break;
       }
     });
   
     inputFeaturedDescription.addEventListener("focus", function () {
       this.classList.remove("is-valid");
       this.classList.remove("is-invalid");
       errFeaturedDescription.innerHTML = null;
     });
     /* END VALIDATION INPUT DESCRIPTION DESTACADA */


///////////////////////////////////////////////////////////////
/* VALIDATION INPUT SIZES */
const inputSizes = document.querySelectorAll("[name^='talle']");

inputSizes.forEach(inputSize => {
    inputSize.addEventListener('change', function() {
        const checkedSizes = Array.from(inputSizes).filter(size => size.checked);
        const errSize = document.querySelector('.error-sizes');

        if (checkedSizes.length === 0) {
            invalid(errSize, 'Debe seleccionar al menos un talle', this);
        } else {
            valid(errSize, this);
        }
    });
});

// /* END VALIDATION INPUT SIZES */


///////////////////////////////////////////////////////////////
/* VALIDATION INPUT IMAGES */
const errImgs = document.querySelector('.error-imgs');
inputImage.addEventListener("change", function () {
    const regExpFiles = /\.(png|jpg|jpeg|webp|gif)$/i;
    const files = Array.from(this.files);

    switch (true) {
        case !files.length:
            invalid(errImgs, "Debe subir al menos una imagen", this);
            break;
        case files.length > 3:
            invalid(errImgs, "No puedes ingresar más de 3 archivos", this);
            break;
        case files.some(file => !regExpFiles.test(file.name)):
            invalid(errImgs, "Formato de archivo no válido. Solo se permiten: .png, .jpg, .jpeg, .webp, .gif", this);
            break;
        default:
            valid(errImgs, this);
            break;
    }
});
/* END VALIDATION INPUT IMAGES */


 /* FORMULARIO */
 const formCreate = document.querySelector("#form-create-product");
 const errFormGeneral = document.querySelector(".err-form-general");
 const fieldsRequired = document.querySelectorAll(".field-required");
 formCreate.addEventListener("submit", function (event) {
   const isName = inputName.value?.trim();
   const isPrice = inputPrice.value?.trim();
   const isCategory = inputCategory.options[inputCategory.selectedIndex].value?.trim();
   const isDescription = inputDescription.value?.trim();
   const isFeaturedDescription = inputFeaturedDescription.value?.trim();
   const isSize = inputSize
   const isColors = inputColors
   const isImage = inputImage.files.length;
   event.preventDefault();

   switch (true) {
     case !isName:
     case !isPrice:
     case !isCategory:
     case !isDescription:
     case !isFeaturedDescription:
     case !isSize:
    //  case !isColors:
     case !isImage:
       existError = true;
       errFormGeneral.innerHTML = "Revisa los campos con errores 💔";
       errFormGeneral.classList.add("alert", "alert-danger");
       fieldsRequired.forEach((field) => (field.innerHTML = "*"));
       break;
   }

   if (!existError) {
     this.submit();
   }
 });
});








