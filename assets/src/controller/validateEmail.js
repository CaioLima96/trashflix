function validateEmail() {

    const inputEmail = document.querySelector('#email')

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    try {

        if (inputEmail.value.match(validRegex)) {
  
            // alert("Endereço de email válido!");
        
            //return true;
        
        } else {

            //alert("Invalid email address!");

            throw new Error("Endereço de email inválido")
          
           //return false;
        
        }

    } catch (error) {
        alert(error)
    }
  
}