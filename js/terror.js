const precoTotal = document.querySelector(".total_preco_side");
const inputDuracaoMusica = document.getElementById("txtduracao");
const lista_sidebar = document.querySelector(".lista_sidebar");

const shopping_cart_551 = document.querySelector("#shopping_cart_551");
const shopping_cart_552 = document.querySelector("#shopping_cart_552");
const shopping_cart_553 = document.querySelector("#shopping_cart_553");
const shopping_cart_554 = document.querySelector("#shopping_cart_554");
const shopping_cart_555 = document.querySelector("#shopping_cart_555");
const shopping_cart_556 = document.querySelector("#shopping_cart_556");
const shopping_cart_557 = document.querySelector("#shopping_cart_557");
const shopping_cart_558 = document.querySelector("#shopping_cart_558");
const shopping_cart_559 = document.querySelector("#shopping_cart_559");
const shopping_cart_5510 = document.querySelector("#shopping_cart_5510");
const shopping_cart_5511 = document.querySelector("#shopping_cart_5511");
const shopping_cart_5512 = document.querySelector("#shopping_cart_5512");
const shopping_cart_5513 = document.querySelector("#shopping_cart_5513");
const shopping_cart_5514 = document.querySelector("#shopping_cart_5514");
const shopping_cart_5515 = document.querySelector("#shopping_cart_5515");
const shopping_cart_5516 = document.querySelector("#shopping_cart_5516");
const shopping_cart_5517 = document.querySelector("#shopping_cart_5517");
const shopping_cart_5518 = document.querySelector("#shopping_cart_5518");
const shopping_cart_5519 = document.querySelector("#shopping_cart_5519");
const shopping_cart_5520 = document.querySelector("#shopping_cart_5520");
const shopping_cart_5521 = document.querySelector("#shopping_cart_5521");


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

shopping_cart_551.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria terror/A Assombração da Casa da Colina - Shirley Jackson.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 34.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_552.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria terror/A coisa IT - Stephen King.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 79.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_553.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria terror/Bem atras de voce - Lisa Garbner.png" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 29.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_554.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria terror/Box Terríveis Mestres - Edgar Allan Poe.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 19.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_555.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria terror/Carmilla - John William.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 41.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_556.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria terror/Drácula - Bram Stoker.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 27.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_557.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria terror/Eu estou pensando em acabar com tudo - Iain Reid.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 31.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_558.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria terror/Frankenstein -  Mary Shelley.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 38.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_559.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria terror/o cemiterio - stephen king.png" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 56.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_5510.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria terror/O silêncio dos inocentes - Thomas Harries.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 18.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_5511.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria terror/Os condenados - Andrew Pyper.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 29.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_5512.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria terror/Strange Case of Dr Jekyll and Mr Hyde - Robert Louis.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 49.99,
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
const btn_heart_551 = document.querySelector("#btn-heart-551");
const btn_heart_552 = document.querySelector("#btn-heart-552");
const btn_heart_553 = document.querySelector("#btn-heart-553");
const btn_heart_554 = document.querySelector("#btn-heart-554");
const btn_heart_555 = document.querySelector("#btn-heart-555");
const btn_heart_556 = document.querySelector("#btn-heart-556");
const btn_heart_557 = document.querySelector("#btn-heart-557");
const btn_heart_558 = document.querySelector("#btn-heart-558");
const btn_heart_559 = document.querySelector("#btn-heart-559");
const btn_heart_5510 = document.querySelector("#btn-heart-5510");
const btn_heart_5511 = document.querySelector("#btn-heart-5511");
const btn_heart_5512 = document.querySelector("#btn-heart-5512");
const btn_heart_5513 = document.querySelector("#btn-heart-5513");
const btn_heart_5514 = document.querySelector("#btn-heart-5514");
const btn_heart_5515 = document.querySelector("#btn-heart-5515");
const btn_heart_5516 = document.querySelector("#btn-heart-5516");
const btn_heart_5517 = document.querySelector("#btn-heart-5517");
const btn_heart_5518 = document.querySelector("#btn-heart-5518");
const btn_heart_5519 = document.querySelector("#btn-heart-5519");
const btn_heart_5520 = document.querySelector("#btn-heart-5520");
const btn_heart_5521 = document.querySelector("#btn-heart-5521");
let fav5 = [
    {
    id: 551, 
    nome:"A Assombração da Casa da Colina",
    autor:"Shirley Jackson",
    img: `src="imagens dos livros/categoria terror/A Assombração da Casa da Colina - Shirley Jackson.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
    preco: 34.99
    },
    {
    id: 552, 
        nome:"A coisa IT",
        autor:"Stephen King",
        img: `src="imagens dos livros/categoria terror/A coisa IT - Stephen King.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 79.99
    },
    {
    id: 553, 
        nome:"Bem atras de você",
        autor:"Lisa Garbner",
        img: 'src="imagens dos livros/categoria terror/Bem atras de voce - Lisa Garbner.png" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 29.99,
    },
    {
    id: 554, 
        nome:"Box Terríveis Mestres",
        autor:"Edgar Allan Poe",
        img: 'src="imagens dos livros/categoria terror/Box Terríveis Mestres - Edgar Allan Poe.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 19.99,
    },
    {
    id: 555, 
        nome:"Carmilla",
        autor:"John William",
        img: 'src="imagens dos livros/categoria terror/Carmilla - John William.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 41.99,
    },
    {
    id: 556, 
        nome:"Drácula",
        autor:"Bram Stoker",
        img: 'src="imagens dos livros/categoria terror/Drácula - Bram Stoker.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 27.99,
    },
    {
    id: 557, 
        nome:"Eu estou pensando em acabar com tudo",
        autor:"Iain Reid",
        img: 'src="imagens dos livros/categoria terror/Eu estou pensando em acabar com tudo - Iain Reid.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 31.99,
    },
    {
    id: 558, 
        nome:"Frankenstein",
        autor:"Mary Shelley",
        img: 'src="imagens dos livros/categoria terror/Frankenstein -  Mary Shelley.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 38.99,
    },
    {
    id: 559, 
        nome:"O Cemitério",
        autor:"Stephen King",
        img: 'src="imagens dos livros/categoria terror/o cemiterio - stephen king.png" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 56.99,
    },
    {
    id: 5510, 
        nome:"O silêncio dos inocentes",
        autor:"Thomas Harries",
        img: 'src="imagens dos livros/categoria terror/O silêncio dos inocentes - Thomas Harries.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 18.99,
    },
    {
    id: 5511, 
        nome:"Os condenados",
        autor:"Andrew Pyper",
        img: 'src="imagens dos livros/categoria terror/Os condenados - Andrew Pyper.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 29.99,
    },
    {
    id: 5512, 
        nome:"Strange Case of Dr Jekyll and Mr Hyde",
        autor:"Robert Louis",
        img: 'src="imagens dos livros/categoria terror/Strange Case of Dr Jekyll and Mr Hyde - Robert Louis.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 49.99,
    },

]

// conversão de valores para string que não é feita automaticamente pelo local storage

// localStorage.setItem("livro", JSON.stringify(fav));

// const getFav  = localStorage.getItem("livro");

// const favoritosObjeto = JSON.parse(getFav);

// console.log(favoritosObjeto);

// localStorage.clear()

// localStorage.removeItem("");


btn_heart_551.addEventListener("click", function(){
//    localStorage.setItem("livro", JSON.stringify(fav[0]));

//    let getFav  = localStorage.getItem("livro");

//    let favoritosObjeto = JSON.parse(getFav);

    produtosFavoritos.push(fav5[0]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
    // console.log(favoritosObjeto)

    // listarLivro();

})
btn_heart_552.addEventListener("click", function(){
    produtosFavoritos.push(fav5[1]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));

})
btn_heart_553.addEventListener("click", function(){
    produtosFavoritos.push(fav5[2]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_554.addEventListener("click", function(){
    produtosFavoritos.push(fav5[3]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_555.addEventListener("click", function(){
    produtosFavoritos.push(fav5[4]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_556.addEventListener("click", function(){
    produtosFavoritos.push(fav5[5]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_557.addEventListener("click", function(){
    produtosFavoritos.push(fav5[6]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_558.addEventListener("click", function(){
    produtosFavoritos.push(fav5[7]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_559.addEventListener("click", function(){
    produtosFavoritos.push(fav5[8]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_5510.addEventListener("click", function(){
    produtosFavoritos.push(fav5[9]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_5511.addEventListener("click", function(){
    produtosFavoritos.push(fav5[10]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_5512.addEventListener("click", function(){
    produtosFavoritos.push(fav5[11]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
