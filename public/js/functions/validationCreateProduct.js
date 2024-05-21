const inputName = document.querySelector("[name='name']");
const inputPrice = document.querySelector("[name='price']");
const inputCategory = document.querySelector("[name='category']");
const inputDescription = document.querySelector("[name='description']");
const inputFeaturedDescription = document.querySelector("[name='featuredDescription']");

// TALLES
// const inputSize = document.querySelector("[name='talle']");

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
   
         case value.length < 5 || value.length > 500:
           errFeaturedDescription.innerHTML =
             "La descripción destacada debe tener un mínimo de 5 y un máximo de 500 caracteres";
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













































})

