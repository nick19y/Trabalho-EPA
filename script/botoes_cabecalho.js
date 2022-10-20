const btn1 = document.querySelector(".preto");
const btn2 = document.querySelector(".cinza");
const livros = document.getElementById("livros");
const temas = document.querySelector(".temas")
const main = document.querySelector(".section-preto-1");
const main_1 = document.querySelector(".section-preto-2");
const main_2 = document.querySelector(".section-preto-3");
const main_3 = document.querySelector(".section-preto-4");
const main_4 = document.querySelector(".section-preto-5");
const main_5 = document.querySelector(".section-preto-6");
const favorito = document.querySelector(".p-favorito");
const popular1 = document.getElementById("p-populares-1");
const popular2 = document.getElementById("p-populares-2");
const popular3 = document.getElementById("p-populares-3");
const menu = document.querySelector("nav");
const carrinho = document.querySelector(".carrinho");
const favoritos = document.querySelector(".favoritos")

btn1.addEventListener("click", function(){
    main.style.backgroundColor="black";
    main.style.transition="1s all";
    favorito.style.color="white";
    popular1.style.color="white";
    popular2.style.color="white";
    popular3.style.color="white";
    livros.style.border="black";
    menu.style.backgroundColor="var(--primary-color)";
    carrinho.style.backgroundColor="var(--primary-color)";
    favoritos.style.backgroundColor="var(--primary-color)";
    menu.style.transition="1s all";
    carrinho.style.transition="1s all";
    favoritos.style.transition="1s all";
});

btn2.addEventListener("click", function(){
    main.style.backgroundColor="var(--primary-color)";
    main.style.transition="1s all";
    favorito.style.color="rgb(63, 59, 59)";
    popular1.style.color="rgb(63, 59, 59)";
    popular2.style.color="rgb(63, 59, 59)";
    popular3.style.color="rgb(63, 59, 59)";
    livros.style.border="grey";
    menu.style.backgroundColor="white";
    carrinho.style.backgroundColor="white";
    favoritos.style.backgroundColor="white";
    nav.style.transition="1s all";
    favoritos.style.transition="1s all";
    carrinho.style.transition="1s all";
});

btn1.addEventListener("click", function(){
    main_1.style.backgroundColor="black";
    main_1.style.transition="1s all";
});

btn2.addEventListener("click", function(){
    main_1.style.backgroundColor="var(--primary-color)";
    main_1.style.transition="1s all";
});

btn1.addEventListener("click", function(){
    main_2.style.backgroundColor="black";
    main_2.style.transition="1s all";
});
btn2.addEventListener("click", function(){
    main_2.style.backgroundColor="var(--primary-color)";
    main_2.style.transition="1s all";
});

btn1.addEventListener("click", function(){
    main_3.style.backgroundColor="black";
    main_3.style.transition="1s all";
});

btn2.addEventListener("click", function(){
    main_3.style.backgroundColor="var(--primary-color)";
    main_3.style.transition="1s all";
});

btn1.addEventListener("click", function(){
    main_4.style.backgroundColor="black";
    main_4.style.transition="1s all";
});

btn2.addEventListener("click", function(){
    main_4.style.backgroundColor="var(--primary-color)";
    main_4.style.transition="1s all";
});

btn1.addEventListener("click", function(){
    main_5.style.backgroundColor="black";
    temas.style.backgroundColor="black";
    main_5.style.transition="1s all";
});

btn2.addEventListener("click", function(){
    main_5.style.backgroundColor="var(--primary-color)";
    temas.style.backgroundColor="var(--primary-color)";
    main_5.style.transition="1s all";
});