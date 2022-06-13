//Enviar formulário
function sendMessage(){
    if (typeof (Storage) !== "undefined") {

        if (localStorage.cont) {
            localStorage.cont = Number(localStorage.cont) + 1;
        } else {
            localStorage.cont = 1;
        }
    cad = document.getElementById('name').value + ';' + document.getElementById('sobrenome').value + ';' + document.getElementById('email').value + ';' + document.getElementById('tel').value + ';' + document.getElementById('mensagem').value;
    localStorage.setItem("cad" + localStorage.cont, cad);
    }
}

//Limpar Local Storage
function cleanMessage(){
    localStorage.clear();
}

