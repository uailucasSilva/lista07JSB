function gato1() {
    nome = localStorage.getItem("txtNome");
    nomeDiv = nome.split(" ");

    alert(`Oi ${nomeDiv[0]}, tudo bem com você?`);
}

contador = 0;
function gato2() {
    document.getElementById("contador").innerHTML = ++contador;
}

function gato3() {
    document.getElementById("gato3").src = "../imagens/gato06.gif"
}

function restauraGato() {
    document.getElementById("gato3").src = "../imagens/gato03.gif"
}

function gato4() {
    document.getElementById("gato4").textContent = "Ai, pare de fazer cócegas!";
}

function restauraTxt() {
    document.getElementById("gato4").textContent = "lá lá lá lá lá lá";
}

function gerarNro() {
    document.getElementById("nroSorte").value = Math.floor(Math.random() * (101 - 1) + 1);
}