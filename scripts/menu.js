function getTxt() {
    nome = localStorage.getItem("txtNome");
    nomeDiv = nome.split(" ");
    document.getElementById("txtSaudacao").innerHTML = `${nomeDiv[0] + " " + nomeDiv[nomeDiv.length - 1]}, seja bem-vindo ao jogo dos Felinos!`
}

function entrar() {
    window.open('felino.html', '_self');
}