function homeSearchBtn(){
    return location = ('./assets/pages/pesquisaFilmes.html')
}

function homeEnterBtn(){
    return location = ('./assets/pages/login.html')
}

// const btnCadastrarEntrar = (evento) => {
//     evento.preventDefault()
//     return location = ('./assets/pages/cadastrarUsuario.html')
    
// }

// const btnCadastrar = $("#btnCadastrar").addEventListener('click', btnCadastrarEntrar)

const btnCad = document.querySelector('#btnCadastrar').addEventListener('click', (evento)=>{

    evento.preventDefault()
    console.log('ab')
    return location = ('./assets/pages/cadastrarUsuario.html')
    
})