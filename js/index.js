const btnInicio = document.querySelector(".logo");
const btnCadastro = document.querySelector(".sign-up");
const btnCadastro2 = document.querySelector(".cadastro");
const btnFavoritos = document.querySelector(".favoritos");
const btnCompra = document.querySelector(".carrinho");
const navSideBar = document.querySelector(".nav1");
const fecharSideBar = document.getElementById("fechar");

btnInicio.addEventListener("click", function(){
    window.open("index.html", "_self");
});
btnCadastro.addEventListener("click", function(){
    window.open("form.html", "_self");
});
btnCadastro2.addEventListener("click", function(){
    window.open("form.html", "_self");
});
btnFavoritos.addEventListener("click", function(){
    window.open("favoritos.html", "_self");
});
btnCompra.addEventListener("click", function(){
    navSideBar.style.width = '300px';
});
fecharSideBar.addEventListener("click", function(){
    navSideBar.style.width = '0px';
})
