function validateEmail() {

    const inputEmail = document.querySelector('#email')

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    try {

        if (inputEmail.value.match(validRegex)) {
  
            //console.log('Olá Mundo')
        
        } else {

            throw new Error("Endereço de email inválido")
        }

    } catch (error) {
        alert(error)
    }
  
}