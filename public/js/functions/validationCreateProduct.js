const inputName = document.querySelector("[name='name']");
const inputPrice = document.querySelector("[name='price']");
const inputCategory = document.querySelector("[name='category']");
const inputDescription = document.querySelector("[name='description']");
const inputFeaturedDescription = document.querySelector("[name='featuredDescription']");

// TALLES
const inputSize = document.querySelector("[name='talle']");

// COLORES
// const inputColors = document.querySelector("[]");

const inputAveriable = document.querySelector("[name='available']");
const inputImage = document.querySelector("[name='image']");
const exRegAlfanumeric = /^[a-zA-Z0-9\s]*$/;

window.addEventListener('load', function(){
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

///////////////////////////////////////////////////////////////
      /* VALIDATION INPUT NAME */
  const errName = document.querySelector(".error-name");
  inputName.addEventListener("blur", function () {
    const value = this.value.trim();
    switch (true) {
        case !value.length:
            statusInvalid(errName, "El nombre es requerido", this);
            break;  
        case !exRegAlfanumeric.test(value):
            statusInvalid(errName, "El nombre debe ser alfanumérico", this);
            break;
        case value.length < 5 || value.length > 100:
            statusInvalid(errTitle,"El nombre debe tener un mínimo de 5 caracteres", this);
            break;
        default:
            statusValid(errName, this);
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
          statusInvalid(errPrice, "El precio es requerido", this);
          break;
  
        case isNaN(value):
          errPrice.innerHTML = "El precio debe ser numérico";
          this.classList.add("is-invalid");
          existError = true;
          break;
  
        case value < 0:
          errPrice.innerHTML = "El precio debe tener un valor positivo";
          this.classList.add("is-invalid");
          existError = true;
          break;
  
        default:
          errPrice.innerHTML = null;
          this.classList.add("is-valid");
          this.classList.remove("is-invalid");
          existError = false;
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
        errCategory.innerHTML = "La categoría es requerida";
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
        existError = true;
    } else {
        errCategory.innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        existError = false;
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
        errDescription.innerHTML = "La descripción es requerida";
        this.classList.add("is-invalid");
        existError = true;
        break;

      case !exRegAlfanumeric.test(value):
        errDescription.innerHTML = "La descripción debe ser alfanumérica";
        this.classList.add("is-invalid");
        existError = true;
        break;

      case value.length < 30 || value.length > 500:
        errDescription.innerHTML =
          "La descripción debe tener un mínimo de 30 y un máximo de 500 caracteres";
        this.classList.add("is-invalid");
        existError = true;
        break;

      default:
        errDescription.innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        existError = false;
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
           errFeaturedDescription.innerHTML = "La descripción destacada es requerida";
           this.classList.add("is-invalid");
           existError = true;
           break;
   
         case !exRegAlfanumeric.test(value):
           errFeaturedDescription.innerHTML = "La descripción destacada debe ser alfanumérica";
           this.classList.add("is-invalid");
           existError = true;
           break;
   
         case value.length < 5 || value.length > 100:
           errFeaturedDescription.innerHTML =
             "La descripción destacada debe tener un mínimo de 5 y un máximo de 100 caracteres";
           this.classList.add("is-invalid");
           existError = true;
           break;
   
         default:
           errFeaturedDescription.innerHTML = null;
           this.classList.add("is-valid");
           this.classList.remove("is-invalid");
           existError = false;
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
            statusInvalid(errSize, 'Debe seleccionar al menos un talle', this);
        } else {
            statusValid(errSize, this);
        }
    });
});

// /* END VALIDATION INPUT SIZES */

///////////////////////////////////////////////////////////////
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */
/* VALIDATION INPUT COLORS */

/* END VALIDATION INPUT COLORS */



///////////////////////////////////////////////////////////////
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */
/* VALIDATION INPUT AVAILABLE */

/* END VALIDATION INPUT AVAILABLE */


///////////////////////////////////////////////////////////////
/* VALIDATION INPUT IMAGES */
const errImgs = document.querySelector('.error-imgs');
inputImage.addEventListener("change", function () {
    const regExpFiles = /\.(png|jpg|jpeg|webp|gif)$/i;
    const files = Array.from(this.files);

    switch (true) {
        case !files.length:
            statusInvalid(errImgs, "Debe subir al menos una imagen", this);
            break;
        case files.length > 3:
            statusInvalid(errImgs, "No puedes ingresar más de 3 archivos", this);
            break;
        case files.some(file => !regExpFiles.test(file.name)):
            statusInvalid(errImgs, "Formato de archivo no válido. Solo se permiten: .png, .jpg, .jpeg, .webp, .gif", this);
            break;
        default:
            statusValid(errImgs, this);
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
  //  const isSize = inputSize
  //  const isColors = inputColors
   const isImage = inputImage.files.length;
   event.preventDefault();

   switch (true) {
     case !isName:
     case !isPrice:
     case !isCategory:
     case !isDescription:
     case !isFeaturedDescription:
    //  case !isSize:
    //  case !isColors:
     case !isImage:
       existError = true;
       errFormGeneral.innerHTML = "Todos los campos son requeridos";
       errFormGeneral.classList.add("alert", "alert-danger");
       fieldsRequired.forEach((field) => (field.innerHTML = "*"));
       break;
   }

   if (!existError) {
     this.submit();
   }
 });
});






