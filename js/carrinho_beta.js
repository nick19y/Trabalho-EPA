const precoTotal = document.querySelector(".total_preco_side");
const inputDuracaoMusica = document.getElementById("txtduracao");
const lista_sidebar = document.querySelector(".lista_sidebar");

const shopping_cart_1 = document.querySelector("#shopping_cart_1");
const shopping_cart_2 = document.querySelector("#shopping_cart_2");
const shopping_cart_3 = document.querySelector("#shopping_cart_3");
const shopping_cart_4 = document.querySelector("#shopping_cart_4");
const shopping_cart_5 = document.querySelector("#shopping_cart_5");
const shopping_cart_6 = document.querySelector("#shopping_cart_6");
const shopping_cart_7 = document.querySelector("#shopping_cart_7");
const shopping_cart_8 = document.querySelector("#shopping_cart_8");
const shopping_cart_9 = document.querySelector("#shopping_cart_9");
const shopping_cart_10 = document.querySelector("#shopping_cart_10");
const shopping_cart_11 = document.querySelector("#shopping_cart_11");
const shopping_cart_12 = document.querySelector("#shopping_cart_12");
const shopping_cart_13 = document.querySelector("#shopping_cart_13");
const shopping_cart_14 = document.querySelector("#shopping_cart_14");
const shopping_cart_15 = document.querySelector("#shopping_cart_15");
const shopping_cart_16 = document.querySelector("#shopping_cart_16");
const shopping_cart_17 = document.querySelector("#shopping_cart_17");
const shopping_cart_18 = document.querySelector("#shopping_cart_18");
const shopping_cart_19 = document.querySelector("#shopping_cart_19");
const shopping_cart_20 = document.querySelector("#shopping_cart_20");
const shopping_cart_21 = document.querySelector("#shopping_cart_21");


const produtos_sidebar = [];

function atualizarTotal(){
    let precoItemAtual = 0;
    produtos_sidebar.forEach((item)=>{
        precoItemAtual+= parseFloat(item.preco);
    })
    
    let somaPrecoTotal = 0;
    produtos_sidebar.forEach((item)=>{
        somaPrecoTotal += parseFloat(item.preco);
    })
    somaPrecoTotalFormatado = somaPrecoTotal.toFixed(2);
    
    
    precoTotal.innerHTML = `R$${somaPrecoTotalFormatado}`;
}

function listarLivros(){
        lista_sidebar.innerHTML = "";
        produtos_sidebar.forEach(function(objeto, posicao){
            lista_sidebar.innerHTML +=
            `
            <li class="quantidade_img">
            <img ${objeto.img} style="width:900; height:120px; margin-left: -20px">
            <div class="preco_carrinho_sidebar">R$${objeto.preco}</div>
            <div class="quantidade_carrinho"></div>
            <div class="imagem_remover" onclick="removerLivro(${posicao})">
            <img src="img/trash.svg" class="imagem_lixo_menu" style="cursor:pointer">
            </div>
            </li>
            `
        })
}

shopping_cart_1.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros brasileiros/o cortico - aluisio azevedo.jpg" alt="" class="img_sidebar"',
        preco: 34.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_2.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/a culpa é das estrelas.png"',
        preco: 79.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_3.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/o morro dos ventos uivantes.png" class="a-anuncio-1" ',
        preco: 29.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_4.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/orgulho e preconceito.jpg" class="a-anuncio-1"',
        preco: 19.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_5.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/e assim que acaba.png" class="a-anuncio-1"',
        preco: 41.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_6.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/a arte da guerra.png" class="a-anuncio-1"',
        preco: 27.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_7.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/o homem de giz.png" class="a-anuncio-1"',
        preco: 31.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_8.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/IT a coisa.jfif" class="a-anuncio-1"',
        preco: 38.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_9.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/o dracula.png" class="a-anuncio-1"',
        preco: 56.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_10.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/os sertoes.png" class="a-anuncio-1"',
        preco: 18.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_11.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/uma odisseia no espaco.png" class="a-anuncio-1"',
        preco: 29.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_12.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/caixa de passaros.png" class="a-anuncio-1"',
        preco: 49.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_13.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/harry poter e a camara secreta.png" class="a-anuncio-1"',
        preco: 48.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_14.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/borboletas no jardim.png" class="a-anuncio-1"',
        preco: 36.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_15.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/frankenstein.png" class="a-anuncio-1""',
        preco: 23.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_16.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/guerra do velho.png" class="a-anuncio-1"',
        preco: 48.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_17.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/a garota do lago.png" class="a-anuncio-1"',
        preco: 26.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_18.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/a biblioteca da meia noite.png" class="a-anuncio-1"',
        preco: 34.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_19.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/vidas secas.png" class="a-anuncio-1"',
        preco: 45.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_20.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/a cabana da solidao.png" class="a-anuncio-1"',
        preco: 19.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_21.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/o poder da manipulação.png" class="a-anuncio-1"',
        preco: 32.99,
    })
    listarLivros();
    atualizarTotal();
});

function removerLivro(posicao){
    produtos_sidebar.splice(posicao, 1);
    console.log(posicao);
    listarLivros();
    atualizarTotal();
}
function finalizarCompra(){
    alert('COMPRA EFETUADA!');
    window.open("index.html", "_self");
}