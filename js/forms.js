var arr = [];

function sendMessage(){
    if (localStorage.meuArr){             
        arr = JSON.parse(localStorage.getItem('meuArr')); 
     }
     
     let name = document.getElementById("name").value;
     let sobrenome = document.getElementById("sobrenome").value;
     let email = document.getElementById("email").value;
     let tel = document.getElementById("tel").value;
     let mensagem = document.getElementById("mensagem").value;
     arr.push(name, sobrenome, email, tel, mensagem);
     document.getElementById("name").value = "";
     document.getElementById("sobrenome").value = "";
     document.getElementById("email").value = "";
     document.getElementById("tel").value = "";
     document.getElementById("mensagem").value = "";
     localStorage.meuArr = JSON.stringify(arr);
    }

//Limpar Local Storage
function cleanMessage(){
    localStorage.clear();
}

