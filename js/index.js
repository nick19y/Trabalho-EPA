const btnInicio = document.querySelector(".logo");
const btnCadastro = document.querySelector(".sign-up");
const btnCadastro2 = document.querySelector(".cadastro");
const btnFavoritos = document.querySelector(".favoritos");

btnInicio.addEventListener("click", function(){
    window.open("index.html");
});
btnCadastro.addEventListener("click", function(){
    window.open("form.html");
});
btnCadastro2.addEventListener("click", function(){
    window.open("form.html");
});
btnFavoritos.addEventListener("click", function(){
    window.open("favoritos.html");
});