function validateForm(input,name,text, error){
    input.addEventListener("blur", regex);
    name.addEventListener("blur",regexName)
    text.addEventListener("blur",regexText)
    function regex(){
        let small = /\S+@\S+\.\S+/;
        let med =
          /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
        let large =
          /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        let stringValidate = input.value;
        if (stringValidate === "" || stringValidate === " ") {
            error.style.display = "block";
            error.textContent = "No debes de dejar el campo email vacio";
        }else if(!small.test(stringValidate) && !med.test(stringValidate) && !large.test(stringValidate)) {
            error.style.display = "block";
            error.textContent = "El email que ingreso es incorrecto.";
        }else {
            error.textContent = "";
            error.style.display = "none";
        }
    }

    function regexName(){
      let stringName = name.value
      if(stringName === "" || stringName === " "){
        error.style.display = "block";
        error.textContent = "No debes de dejar el campo nombre vacio";
      }else if  (stringName.length > 20){
        error.style.display = "block";
        error.textContent = "Solo puedes ingresar 20 caracteres";
      }else{
        error.textContent = "";
        error.style.display = "none";
      }
    }
    function regexText(){
      let stringName = text.value
      if(stringName === "" || stringName === " "){
        error.style.display = "block";
        error.textContent = "No debes de dejar el campo asunto vacio";
      }else if  (stringName.length > 20){
        error.style.display = "block";
        error.textContent = "Solo puedes ingresar 20 caracteres";
      }else{
        error.textContent = "";
        error.style.display = "none";
      }
    }
         
}
export default validateForm
