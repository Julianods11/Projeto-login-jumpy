 function validar() {
    var comErro = document.getElementById('errormsg')
    var name = document.getElementById("nome")
    var email = document.getElementById("email")
    var tel = document.getElementById("telefone")
    var cpf = document.getElementById("cpf")
    var pass = document.getElementById("senha")
    var input = document.querySelectorAll("input")
    
    

    if (name.value <= 0 || email.value <= 0 || tel.value <= 0 || cpf.value <= 0 || pass.value <= 0) {

        comErro.innerHTML ="Campos obrigatórios não registrados.";
        comErro.style.color = "red";
        return false;
    } else {
        comErro.innerHTML ="Sucesso!";
        comErro.style.color = "lime";
    }
}

function revalidar(){
    var comErro = document.getElementById('errormsg')
    comErro.innerHTML = '';
}
/* inner.html +="hello" */