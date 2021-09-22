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


/*
============================
*/


function homeSearchBtn(){
    return location = ('./assets/pages/pesquisaFilmes.html')
}

function homeEnterBtn(){
    return location = ('./assets/pages/login.html')
}

function homeCadastrarBtn(){
    return location = ('./assets/pages/cadastrarUsuario.html')
}

// const btnCad = document.querySelector('.btnCadastrar').addEventListener('click', (evento)=>{

//     evento.preventDefault()
//     console.log('ab')
//     return location = ('./assets/pages/cadastrarUsuario.html')
    
// })