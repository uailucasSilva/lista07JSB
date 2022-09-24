function login() {
    nome = document.getElementById("txtNome").value;
    if (nome == "") {
        document.getElementById("ERRONOME").innerHTML = "Nenhum nome foi preenchido!";
    }
    else if (nome.split(" ").length < 2) {
        document.getElementById("ERRONOME").innerHTML = "O nome precisa ter no mínimo duas palavras!";
    }
    else {
        localStorage.setItem("txtNome", nome);
        window.open('pages/menu.html', '_self');
    }
}

function limpaErro() {
    document.getElementById("ERRONOME").innerHTML = "";
}