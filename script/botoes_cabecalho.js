const btn1 = document.querySelector(".preto");
const btn2 = document.querySelector(".cinza");


//    ---parte do menu---
const livros = document.getElementById("livros");
const favorito = document.querySelector(".p-favorito");
const menu = document.querySelector("nav");
const carrinho = document.querySelector(".carrinho");
const favoritos = document.querySelector(".favoritos")

btn1.addEventListener("click", function(){
    favorito.style.color="white";
    livros.style.border="black";
    menu.style.backgroundColor="var(--primary-color)";
    carrinho.style.backgroundColor="var(--primary-color)";
    favoritos.style.backgroundColor="var(--primary-color)";
    menu.style.transition="1s all";
    carrinho.style.transition="1s all";
    favoritos.style.transition="1s all";
});

btn2.addEventListener("click", function(){
    favorito.style.color="rgb(63, 59, 59)";
    livros.style.border="white";
    livros.style.border="grey";
    menu.style.backgroundColor="white";
    carrinho.style.backgroundColor="white";
    favoritos.style.backgroundColor="white";
    nav.style.transition="1s all";
    favoritos.style.transition="1s all";
    carrinho.style.transition="1s all";
});


//      ---parte das fontes---
const hhh1 = document.querySelector(".h1-nav-favorito1");
const hhh2 = document.querySelector(".h1-nav-favorito2");
const hhh3 = document.querySelector(".h1-nav-favorito3");
const hhh4 = document.querySelector(".h1-nav-favorito4");
const hhh5 = document.querySelector(".h1-nav-favorito5");
const popular1 = document.getElementById("p-populares-1");
const popular2 = document.getElementById("p-populares-2");
const popular3 = document.getElementById("p-populares-3");

btn1.addEventListener("click", function(){
    popular1.style.color="white";
    popular2.style.color="white";
    popular3.style.color="white";
    hhh1.style.color="white";
    hhh1.style.transition="1s all";
    hhh2.style.color="white";
    hhh2.style.transition="1s all";
    hhh3.style.color="white";
    hhh3.style.transition="1s all";
    hhh4.style.color="white";
    hhh4.style.transition="1s all";
    hhh5.style.color="white";
    hhh5.style.transition="1s all";
});

btn2.addEventListener("click", function(){
    popular1.style.color="rgb(63, 59, 59)";
    popular2.style.color="rgb(63, 59, 59)";
    popular3.style.color="rgb(63, 59, 59)";
    hhh1.style.color="black";
    hhh1.style.transition="1s all";
    hhh2.style.color="black";
    hhh2.style.transition="1s all";
    hhh3.style.color="black";
    hhh3.style.transition="1s all";
    hhh4.style.color="black";
    hhh4.style.transition="1s all";
    hhh5.style.color="black";
    hhh5.style.transition="1s all";
});


//      ---parte do main/sections---
const main = document.querySelector(".section-preto-1");
const main_1 = document.querySelector(".section-preto-2");
const main_2 = document.querySelector(".section-preto-3");
const main_3 = document.querySelector(".section-preto-4");
const main_4 = document.querySelector(".section-preto-5");
const main_5 = document.querySelector(".section-preto-6");
const temas = document.querySelector(".temas");

btn1.addEventListener("click", function(){
    main.style.backgroundColor="black";
    main.style.transition="1s all";
    main_1.style.backgroundColor="black";
    main_1.style.transition="1s all";
    main_2.style.backgroundColor="black";
    main_2.style.transition="1s all";
    main_3.style.backgroundColor="black";
    main_3.style.transition="1s all";
    main_4.style.backgroundColor="black";
    main_4.style.transition="1s all";
    main_5.style.backgroundColor="black";
    main_5.style.transition="1s all";
    temas.style.backgroundColor="black";
    temas.style.transition="1s all";
});

btn2.addEventListener("click", function(){
    main.style.backgroundColor="var(--primary-color)";
    main.style.transition="1s all";
    main_1.style.backgroundColor="var(--primary-color)";
    main_1.style.transition="1s all";
    main_2.style.backgroundColor="var(--primary-color)";
    main_2.style.transition="1s all";
    main_3.style.backgroundColor="var(--primary-color)";
    main_3.style.transition="1s all";
    main_4.style.backgroundColor="var(--primary-color)";
    main_4.style.transition="1s all";
    main_5.style.backgroundColor="var(--primary-color)";
    main_5.style.transition="1s all";
    temas.style.backgroundColor="var(--primary-color)";
    temas.style.transition="1s all";
});

//      ---parte do favoritos---
const main_favorito = document.querySelector("#main-dos-favoritos");
const border_bottom_favoritos = document.querySelector(".h1-favoritos-border");
const adicionar_carrinho = document.querySelector(".adicionar_carrinho");
// dark
btn1.addEventListener("click", function(){
    main_favorito.style.backgroundColor="black";
    main_favorito.style.transition="1s all";
    border_bottom_favoritos.style.borderBottom="1px solid white"
    border_bottom_favoritos.style.transition="1s all";
});
// light
btn2.addEventListener("click", function(){
    main_favorito.style.backgroundColor="var(--primary-color)";
    main_favorito.style.transition="1s all";
    border_bottom_favoritos.style.borderBottom="1px solid black"
    adicionar_carrinho.style.backgroundColor="white";
});

// CADASTRAR
const main_cadastrar = document.querySelector(".main-cadastrar"); 

// dark
btn1.addEventListener("click", function(){
    main_cadastrar.style.backgroundColor="black";
    main_cadastrar.style.transition="1s all";
});

// light
btn2.addEventListener("click", function(){
    main_cadastrar.style.backgroundColor="var(--primary-color)";
    main_cadastrar.style.transition="1s all";
});

// LOGIN
const main_login = document.querySelector(".main-login");

// dark
btn1.addEventListener("click", function(){
    main_login.style.backgroundColor="black";
    main_login.style.transition="1s all";
});

// light
btn2.addEventListener("click", function(){
    main_login.style.backgroundColor="var(--primary-color)";
    main_login.style.transition="1s all";
});

// fontes
const h2_my_books = document.querySelector(".h2-my-books");

// dark
btn1.addEventListener("click", function(){
    h2_my_books.style.color="white";
    h2_my_books.style.transition="1s all";
});

// light
btn2.addEventListener("click", function(){
    h2_my_books.style.color="black";
    h2_my_books.style.transition="1s all";
});

const main_ficcao3 = document.querySelector(".section-preto-22");
const main_ficcao1 = document.querySelector(".section-preto-33");
const main_ficcao2 = document.querySelector(".section-preto-44");
const h1_ficcao111 = document.querySelector(".h1-ficcao-111");
const h1_ficcao222 = document.querySelector(".h1-ficcao-222");
const h1_ficcao333 = document.querySelector(".h1-ficcao-333");
const h1_ficcao444 = document.querySelector(".h1-ficcao-444");
const h1_ficcao555 = document.querySelector(".h1-ficcao-555");
const ficcao_favoritos = document.querySelector("#p-populares-1");

btn1.addEventListener("click", function(){
    main_ficcao1.style.backgroundColor="black";
    main_ficcao1.style.transition="1s all";
    main_ficcao2.style.backgroundColor="black";
    main_ficcao2.style.transition="1s all";
    main_ficcao3.style.backgroundColor="black";
    main_ficcao3.style.transition="1s all";
    h1_ficcao111.style.color="white";
    h1_ficcao111.style.transition="1s all";
    h1_ficcao222.style.color="white";
    h1_ficcao222.style.transition="1s all";
    h1_ficcao333.style.color="white";
    h1_ficcao333.style.transition="1s all";
    h1_ficcao444.style.color="white";
    h1_ficcao444.style.transition="1s all";
    h1_ficcao555.style.color="white";
    h1_ficcao555.style.transition="1s all";
    ficcao_favoritos.style.transition="1s all";
});

btn2.addEventListener("click", function(){
    main_ficcao1.style.backgroundColor="var(--primary-color)";
    main_ficcao1.style.transition="1s all";
    main_ficcao2.style.backgroundColor="var(--primary-color)";
    main_ficcao2.style.transition="1s all";
    main_ficcao3.style.backgroundColor="var(--primary-color)";
    main_ficcao3.style.transition="1s all";
    h1_ficcao111.style.color="black";
    h1_ficcao111.style.transition="1s all";
    h1_ficcao222.style.color="black";
    h1_ficcao222.style.transition="1s all";
    h1_ficcao333.style.color="black";
    h1_ficcao333.style.transition="1s all";
    h1_ficcao444.style.color="black";
    h1_ficcao444.style.transition="1s all";
    h1_ficcao555.style.color="black";
    h1_ficcao555.style.transition="1s all";
    ficcao_favoritos.style.transition="1s all";
});


const main_terror33 = document.querySelector(".section-preto-222");
const main_terror11 = document.querySelector(".section-preto-333");
const main_terror22 = document.querySelector(".section-preto-444");
const h1_terror111 = document.querySelector(".h1-terror-111");
const h1_terror222 = document.querySelector(".h1-terror-222");
const h1_terror333 = document.querySelector(".h1-terror-333");
const h1_terror444 = document.querySelector(".h1-terror-444");
const h1_terror555 = document.querySelector(".h1-terror-555");
const terror_favoritos = document.querySelector("#p-populares-1");

btn1.addEventListener("click", function(){
    main_terror11.style.backgroundColor="black";
    main_terror11.style.transition="1s all";
    main_terror22.style.backgroundColor="black";
    main_terror22.style.transition="1s all";
    main_terror33.style.backgroundColor="black";
    main_terror33.style.transition="1s all";
    h1_terror111.style.color="white";
    h1_terror111.style.transition="1s all";
    h1_terror222.style.color="white";
    h1_terror222.style.transition="1s all";
    h1_terror333.style.color="white";
    h1_terror333.style.transition="1s all";
    h1_terror444.style.color="white";
    h1_terror444.style.transition="1s all";
    h1_terror555.style.color="white";
    h1_terror555.style.transition="1s all";
    terror_favoritos.style.transition="1s all";
});

btn2.addEventListener("click", function(){
    main_terror11.style.backgroundColor="var(--primary-color)";
    main_terror11.style.transition="1s all";
    main_terror22.style.backgroundColor="var(--primary-color)";
    main_terror22.style.transition="1s all";
    main_terror33.style.backgroundColor="var(--primary-color)";
    main_terror33.style.transition="1s all";
    h1_terror111.style.color="black";
    h1_terror111.style.transition="1s all";
    h1_terror222.style.color="black";
    h1_terror222.style.transition="1s all";
    h1_terror333.style.color="black";
    h1_terror333.style.transition="1s all";
    h1_terror444.style.color="black";
    h1_terror444.style.transition="1s all";
    h1_terror555.style.color="black";
    h1_terror555.style.transition="1s all";
    terror_favoritos.style.transition="1s all";
});

const main_suspense333 = document.querySelector(".section-preto-222");
const main_suspense111 = document.querySelector(".section-preto-333");
const main_suspense222 = document.querySelector(".section-preto-444");
const h1_suspense111 = document.querySelector(".h1-suspense-111");
const h1_suspense222 = document.querySelector(".h1-suspense-222");
const h1_suspense333 = document.querySelector(".h1-suspense-333");
const h1_suspense444 = document.querySelector(".h1-suspense-444");
const h1_suspense555 = document.querySelector(".h1-suspense-555");
const suspense_favoritos = document.querySelector("#p-populares-1");

btn1.addEventListener("click", function(){
    main_suspense111.style.backgroundColor="black";
    main_suspense111.style.transition="1s all";
    main_suspense222.style.backgroundColor="black";
    main_suspense222.style.transition="1s all";
    main_suspense333.style.backgroundColor="black";
    main_suspense333.style.transition="1s all";
    h1_suspense111.style.color="white";
    h1_suspense111.style.transition="1s all";
    h1_suspense222.style.color="white";
    h1_suspense222.style.transition="1s all";
    h1_suspense333.style.color="white";
    h1_suspense333.style.transition="1s all";
    h1_suspense444.style.color="white";
    h1_suspense444.style.transition="1s all";
    h1_suspense555.style.color="white";
    h1_suspense555.style.transition="1s all";
    suspense_favoritos.style.transition="1s all";
});

btn2.addEventListener("click", function(){
    main_suspense111.style.backgroundColor="var(--primary-color)";
    main_suspense111.style.transition="1s all";
    main_suspense222.style.backgroundColor="var(--primary-color)";
    main_suspense222.style.transition="1s all";
    main_suspense333.style.backgroundColor="var(--primary-color)";
    main_suspense333.style.transition="1s all";
    h1_suspense111.style.color="black";
    h1_suspense111.style.transition="1s all";
    h1_suspense222.style.color="black";
    h1_suspense222.style.transition="1s all";
    h1_suspense333.style.color="black";
    h1_suspense333.style.transition="1s all";
    h1_suspense444.style.color="black";
    h1_suspense444.style.transition="1s all";
    h1_suspense555.style.color="black";
    h1_suspense555.style.transition="1s all";
    suspense_favoritos.style.transition="1s all";
});

const main_brasileiros3333 = document.querySelector(".section-preto-2222");
const main_brasileiros1111 = document.querySelector(".section-preto-3333");
const main_brasileiros2222 = document.querySelector(".section-preto-4444");
const h1_brasileiros111 = document.querySelector(".h1-brasileiros-111");
const h1_brasileiros222 = document.querySelector(".h1-brasileiros-222");
const h1_brasileiros333 = document.querySelector(".h1-brasileiros-333");
const h1_brasileiros444 = document.querySelector(".h1-brasileiros-444");
const h1_brasileiros555 = document.querySelector(".h1-brasileiros-555");
const brasileiros_favoritos = document.querySelector("#p-populares-1");

btn1.addEventListener("click", function(){
    main_brasileiros1111.style.backgroundColor="black";
    main_brasileiros1111.style.transition="1s all";
    main_brasileiros2222.style.backgroundColor="black";
    main_brasileiros2222.style.transition="1s all";
    main_brasileiros3333.style.backgroundColor="black";
    main_brasileiros3333.style.transition="1s all";
    h1_brasileiros111.style.color="white";
    h1_brasileiros111.style.transition="1s all";
    h1_brasileiros222.style.color="white";
    h1_brasileiros222.style.transition="1s all";
    h1_brasileiros333.style.color="white";
    h1_brasileiros333.style.transition="1s all";
    h1_brasileiros444.style.color="white";
    h1_brasileiros444.style.transition="1s all";
    h1_brasileiros555.style.color="white";
    h1_brasileiros555.style.transition="1s all";
    brasileiros_favoritos.style.transition="1s all";
});

btn2.addEventListener("click", function(){
    main_brasileiros1111.style.backgroundColor="var(--primary-color)";
    main_brasileiros1111.style.transition="1s all";
    main_brasileiros2222.style.backgroundColor="var(--primary-color)";
    main_brasileiros2222.style.transition="1s all";
    main_brasileiros3333.style.backgroundColor="var(--primary-color)";
    main_brasileiros3333.style.transition="1s all";
    h1_brasileiros111.style.color="black";
    h1_brasileiros111.style.transition="1s all";
    h1_brasileiros222.style.color="black";
    h1_brasileiros222.style.transition="1s all";
    h1_brasileiros333.style.color="black";
    h1_brasileiros333.style.transition="1s all";
    h1_brasileiros444.style.color="black";
    h1_brasileiros444.style.transition="1s all";
    h1_brasileiros555.style.color="black";
    h1_brasileiros555.style.transition="1s all";
    brasileiros_favoritos.style.transition="1s all";
});

const main_romance33333 = document.querySelector(".section-preto-22222");
const main_romance11111 = document.querySelector(".section-preto-33333");
const main_romance22222 = document.querySelector(".section-preto-44444");
const h1_romance111 = document.querySelector(".h1-romance-111");
const h1_romance222 = document.querySelector(".h1-romance-222");
const h1_romance333 = document.querySelector(".h1-romance-333");
const h1_romance444 = document.querySelector(".h1-romance-444");
const h1_romance555 = document.querySelector(".h1-romance-555");
const romance_favoritos = document.querySelector("#p-populares-1");

btn1.addEventListener("click", function(){
    main_romance11111.style.backgroundColor="black";
    main_romance11111.style.transition="1s all";
    main_romance22222.style.backgroundColor="black";
    main_romance22222.style.transition="1s all";
    main_romance33333.style.backgroundColor="black";
    main_romance33333.style.transition="1s all";
    h1_romance111.style.color="white";
    h1_romance111.style.transition="1s all";
    h1_romance222.style.color="white";
    h1_romance222.style.transition="1s all";
    h1_romance333.style.color="white";
    h1_romance333.style.transition="1s all";
    h1_romance444.style.color="white";
    h1_romance444.style.transition="1s all";
    h1_romance555.style.color="white";
    h1_romance555.style.transition="1s all";
    romance_favoritos.style.transition="1s all";
});

btn2.addEventListener("click", function(){
    main_romance11111.style.backgroundColor="var(--primary-color)";
    main_romance11111.style.transition="1s all";
    main_romance22222.style.backgroundColor="var(--primary-color)";
    main_romance22222.style.transition="1s all";
    main_romance33333.style.backgroundColor="var(--primary-color)";
    main_romance33333.style.transition="1s all";
    h1_romance111.style.color="black";
    h1_romance111.style.transition="1s all";
    h1_romance222.style.color="black";
    h1_romance222.style.transition="1s all";
    h1_romance333.style.color="black";
    h1_romance333.style.transition="1s all";
    h1_romance444.style.color="black";
    h1_romance444.style.transition="1s all";
    h1_romance555.style.color="black";
    h1_romance555.style.transition="1s all";
    romance_favoritos.style.transition="1s all";
});