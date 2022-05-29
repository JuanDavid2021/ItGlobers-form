export function validateInput(input) {

    const errors = {};
    
    if(input.name==="" && input.email==="" && input.cel==="" && input.age===""){
      errors.all = "debes ingresar todos los datos"
    } 
    if (!input.name) {
      errors.name = 'name es requerido';
    }  else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(input.name)) {
      errors.name = 'el nombre sólo debe contener letras';
    } 
  
    if (!input.email) {
      errors.email = 'email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = 'formato de email inválido';
    }
  
    if(!input.cel){errors.cel = "numero es requerido"}
    else if(!/^\d{7,14}$/.test(input.cel)){
      errors.cel ="el número de celular debe contener entre 7 y 14 digitos"
    }
  
    if(!input.age) {
      errors.age = 'edad es requerida';} 
     else if(input.age <18 || input.age>100) {errors.age = "la edad debe estar entre 18 y 100 años"} 
    
    return errors;
  };
  