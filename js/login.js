const btnEsqueceuSenha = document.querySelector("p");
const btnEntrar = document.getElementById("button1");
const btnCriarConta = document.getElementById("button2");

btnEsqueceuSenha.addEventListener("click", function(){
    window.open("esqueceu_senha.html", "_self");
});
btnEntrar.addEventListener("click", function(){
    window.open("index.html", "_self");
});
btnCriarConta.addEventListener("click", function(){
    window.open("form.html", "_self");
});