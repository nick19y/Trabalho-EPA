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
});
// light
btn2.addEventListener("click", function(){
    main_favorito.style.backgroundColor="white";
    main_favorito.style.transition="1s all";
    border_bottom_favoritos.style.borderBottom="1px solid black"
    adicionar_carrinho.style.backgroundColor="red";
});

// fontes
const nome_do_livro1 = document.querySelector("#name1");
const nome_do_livro2 = document.querySelector("#name2");
const nome_do_livro3 = document.querySelector("#name3");
const nome_do_livro4 = document.querySelector("#name4");
const nome_do_livro5 = document.querySelector("#name5");
const nome_do_livro6 = document.querySelector("#name6");
const nome_do_livro7 = document.querySelector("#name7");
const nome_do_livro8 = document.querySelector("#name8");
const nome_do_livro9 = document.querySelector("#name9");
const nome_do_livro10 = document.querySelector("#name10");
// dark
btn1.addEventListener("click", function(){
    nome_do_livro1.style.color="white";
    nome_do_livro1.style.transition="1s all";
    nome_do_livro2.style.color="white";
    nome_do_livro2.style.transition="1s all";
    nome_do_livro3.style.color="white";
    nome_do_livro3.style.transition="1s all";
    nome_do_livro4.style.color="white";
    nome_do_livro4.style.transition="1s all";
    nome_do_livro5.style.color="white";
    nome_do_livro5.style.transition="1s all";
    nome_do_livro6.style.color="white";
    nome_do_livro6.style.transition="1s all";
    nome_do_livro7.style.color="white";
    nome_do_livro7.style.transition="1s all";
    nome_do_livro8.style.color="white";
    nome_do_livro8.style.transition="1s all";
    nome_do_livro9.style.color="white";
    nome_do_livro9.style.transition="1s all";
    nome_do_livro10.style.color="white";
    nome_do_livro10.style.transition="1s all";
});
// light
btn2.addEventListener("click", function(){
    nome_do_livro1.style.color="black";
    nome_do_livro1.style.transition="1s all";
    nome_do_livro2.style.color="black";
    nome_do_livro2.style.transition="1s all";
    nome_do_livro3.style.color="black";
    nome_do_livro3.style.transition="1s all";
    nome_do_livro4.style.color="black";
    nome_do_livro4.style.transition="1s all";
    nome_do_livro5.style.color="black";
    nome_do_livro5.style.transition="1s all";
    nome_do_livro6.style.color="black";
    nome_do_livro6.style.transition="1s all";
    nome_do_livro7.style.color="black";
    nome_do_livro7.style.transition="1s all";
    nome_do_livro8.style.color="black";
    nome_do_livro8.style.transition="1s all";
    nome_do_livro9.style.color="black";
    nome_do_livro9.style.transition="1s all";
    nome_do_livro10.style.color="black";
    nome_do_livro10.style.transition="1s all";
});

// Carinho de compras
const main_carrinho = document.querySelector(".main-carrinho");

// dark
btn1.addEventListener("click", function(){
    main_carrinho.style.backgroundColor="black";
    main_carrinho.style.transition="1s all";
});
// light
btn2.addEventListener("click", function(){
    main_carrinho.style.backgroundColor="var(--primary-color)";
    main_carrinho.style.transition="1s all";
});

//FONTES
const titulo_cesta = document.querySelector(".titulo_cesta");
const titulo_produto_cesta = document.querySelector("#produto_cesta");
const texto_cesta = document.querySelector(".txt_cesta");
const texto_cesta1 = document.querySelector(".txt_cesta1");
const texto_cesta2 = document.querySelector(".txt_cesta2");
const texto_cesta3 = document.querySelector(".txt_cesta3");
const quantidade = document.querySelector("#quantidade_cesta");
const preco = document.querySelector("#preco_cesta");
const remover_produto1 = document.querySelector(".remover_produto1");
const qtd_js_p1 = document.querySelector(".qtd_js_p1");
const adicionar_produto1 = document.querySelector(".adicionar_produto1");
const remover_produto2 = document.querySelector(".remover_produto2");
const qtd_js_p2 = document.querySelector(".qtd_js_p2");
const adicionar_produto2 = document.querySelector(".adicionar_produto2");
const preco_produto_cesta1 = document.querySelector(".preco_produto_cesta1");
const preco_produto_cesta2 = document.querySelector(".preco_produto_cesta2");

// dark
btn1.addEventListener("click", function(){
    main_carrinho.style.backgroundColor="black";
    main_carrinho.style.transition="1s all";
    titulo_cesta.style.color="white";
    titulo_cesta.style.transition="1s all";
    titulo_produto_cesta.style.color="white";
    titulo_produto_cesta.style.transition="1s all";
    texto_cesta.style.color="white";
    texto_cesta.style.transition="1s all";
    texto_cesta1.style.color="white";
    texto_cesta1.style.transition="1s all";
    texto_cesta2.style.color="white";
    texto_cesta2.style.transition="1s all";
    texto_cesta3.style.color="white";
    texto_cesta3.style.transition="1s all";
    quantidade.style.color="white";
    quantidade.style.transition="1s all";
    preco.style.color="white";
    preco.style.transition="1s all";
    remover_produto1.style.color="white";
    remover_produto1.style.transition="1s all";
    qtd_js_p1.style.color="white";
    qtd_js_p1.style.transition="1s all";
    adicionar_produto1.style.color="white";
    adicionar_produto1.style.transition="1s all";
    remover_produto2.style.color="white";
    remover_produto2.style.transition="1s all";
    qtd_js_p2.style.color="white";
    qtd_js_p2.style.transition="1s all";
    adicionar_produto2.style.color="white";
    adicionar_produto2.style.transition="1s all";
    preco_produto_cesta1.style.color="white";
    preco_produto_cesta1.style.transition="1s all";
    preco_produto_cesta2.style.color="white";
    preco_produto_cesta2.style.transition="1s all";
});

// light
btn2.addEventListener("click", function(){
    main_carrinho.style.backgroundColor="var(--primary-color)";
    main_carrinho.style.transition="1s all";
    titulo_cesta.style.color="black";
    titulo_cesta.style.transition="1s all";
    titulo_produto_cesta.style.color="black";
    titulo_produto_cesta.style.transition="1s all";
    texto_cesta.style.color="black";
    texto_cesta.style.transition="1s all";
    texto_cesta1.style.color="black";
    texto_cesta1.style.transition="1s all";
    texto_cesta2.style.color="black";
    texto_cesta2.style.transition="1s all";
    texto_cesta3.style.color="black";
    texto_cesta3.style.transition="1s all";
    quantidade.style.color="black";
    quantidade.style.transition="1s all";
    preco.style.color="black";
    preco.style.transition="1s all";
    remover_produto1.style.color="black";
    remover_produto1.style.transition="1s all";
    qtd_js_p1.style.color="black";
    qtd_js_p1.style.transition="1s all";
    adicionar_produto1.style.color="black";
    adicionar_produto1.style.transition="1s all";
    remover_produto2.style.color="black";
    remover_produto2.style.transition="1s all";
    qtd_js_p2.style.color="black";
    qtd_js_p2.style.transition="1s all";
    adicionar_produto2.style.color="black";
    adicionar_produto2.style.transition="1s all";
    preco_produto_cesta1.style.color="black";
    preco_produto_cesta1.style.transition="1s all";
    preco_produto_cesta2.style.color="black";
    preco_produto_cesta2.style.transition="1s all";
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