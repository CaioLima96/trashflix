const emailMask = document.querySelector('#btnSubmit').addEventListener('click', (evento) => {

    evento.preventDefault()

    const inputEmail = document.querySelector('#email').value

    let inputEmailArr = inputEmail.split('')
    console.log(inputEmailArr)


    //  try {
    //     for(let i = 0; i < inputEmailArr.lenght; i++) {
    //         if(inputEmailArr[i] == inputEmailArr[i].indexOf("@")){
    //             console.log('sss')
    //         } else {
    //             throw new Error('Email inválido')
                
    //         }
    //     }
    
        
    // } catch (error) {
    //     alert(error)
    // }

}) 


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
  
  




// `<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style="border: 1px solid">

// <div class="carousel-inner">
//   <div class="carousel-item active">
//     <img data-title="avengers" src="./assets/img/bg/2-3.jpg" class="d-block w-100" alt="...">
//   </div>
//   <div class="carousel-item">
//     <img data-title="psycho" src="..." class="d-block w-100" alt="...">
//   </div>
//   <div class="carousel-item">
//     <img data-title="pikomon" src="..." class="d-block w-100" alt="...">
//   </div>
// </div>

// <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Previous</span>
// </button>
// <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//   <span class="carousel-control-next-icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Next</span>
// </button>
// </div>`