const precoTotal = document.querySelector(".total_preco_side");
const inputDuracaoMusica = document.getElementById("txtduracao");
const lista_sidebar = document.querySelector(".lista_sidebar");

const shopping_cart_441 = document.querySelector("#shopping_cart_441");
const shopping_cart_442 = document.querySelector("#shopping_cart_442");
const shopping_cart_443 = document.querySelector("#shopping_cart_443");
const shopping_cart_444 = document.querySelector("#shopping_cart_444");
const shopping_cart_445 = document.querySelector("#shopping_cart_445");
const shopping_cart_446 = document.querySelector("#shopping_cart_446");
const shopping_cart_447 = document.querySelector("#shopping_cart_447");
const shopping_cart_448 = document.querySelector("#shopping_cart_448");
const shopping_cart_449 = document.querySelector("#shopping_cart_449");
const shopping_cart_450 = document.querySelector("#shopping_cart_450");
const shopping_cart_451 = document.querySelector("#shopping_cart_451");
const shopping_cart_452 = document.querySelector("#shopping_cart_452");
const shopping_cart_453 = document.querySelector("#shopping_cart_453");
const shopping_cart_454 = document.querySelector("#shopping_cart_454");
const shopping_cart_455 = document.querySelector("#shopping_cart_455");
const shopping_cart_456 = document.querySelector("#shopping_cart_456");
const shopping_cart_457 = document.querySelector("#shopping_cart_457");
const shopping_cart_458 = document.querySelector("#shopping_cart_458");
const shopping_cart_459 = document.querySelector("#shopping_cart_459");
const shopping_cart_460 = document.querySelector("#shopping_cart_450");
const shopping_cart_461 = document.querySelector("#shopping_cart_451");


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

shopping_cart_441.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/categoria romance/A canção de Aquiles - Madeline Miller.jfif" class="a-anuncio-1"
        style="width: 140px;"`,
        preco: 34.99
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_442.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/categoria romance/A culpa é das estrelas - John green.jpg" class="a-anuncio-1"
        style="width: 135px; margin-right: 15px; margin-top: 1px;"`,
        preco: 79.99
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_443.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria romance/Aristóteles e Dante descobrem os segredos do universo - Benjamin Alire.jpg" class="a-anuncio-1" style="width: 130px;  margin-bottom: 10px;"',
        preco: 29.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_444.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria romance/Como   eu era antes de você livro - Jojo Moyes.jpg" class="a-anuncio-1" style="width: 205px;"',
        preco: 19.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_445.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria romance/Crepúsculo - Nicola Barbola.jpg" class="a-anuncio-1" style="width: 183px; margin-top: 3px;"',
        preco: 41.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_446.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria romance/Dom Casmurro - Machado de Assis.jpg" class="a-anuncio-1" style="width: 135px; margin-top: 3px;"',
        preco: 27.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_447.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria romance/é assim que acaba - colleen hoover.jpg" class="a-anuncio-1" style="width: 130px;"',
        preco: 31.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_448.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria romance/Garota exemplar -Gillian Flynn.jpg" class="a-anuncio-1" style="width: 140px;"',
        preco: 38.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_449.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria romance/Intermitências da morte - José Saramago.jpg" class="a-anuncio-1" style="width: 135px;"',
        preco: 56.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_450.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria romance/Madame Bovary - Gustofe flauver.jfif" class="a-anuncio-1" style="width: 135px; margin-right: 10px;"',
        preco: 18.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_451.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria romance/O amor nos tempos do cólera Gabriel - Gárcia Márquez.png" class="a-anuncio-1" style="width: 135px;"',
        preco: 29.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_452.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria romance/O grande gatsby -  F. Scott Fitzgerald.jfif" class="a-anuncio-1" style="width: 132.5px;"',
        preco: 49.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_453.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria romance/O morro dos ventos uivantes - Emily Bronte.jpg" class="a-anuncio-1" style="width: 140px;"',
        preco: 48.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_454.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/categoria romance/Orgulho e Preconceito - Jane Austen.jpg" class="a-anuncio-1" style="width: 135px;"',
        preco: 16.99,
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

const btn_heart_441 = document.querySelector("#btn-heart-441");
const btn_heart_442 = document.querySelector("#btn-heart-442");
const btn_heart_443 = document.querySelector("#btn-heart-443");
const btn_heart_444 = document.querySelector("#btn-heart-444");
const btn_heart_445 = document.querySelector("#btn-heart-445");
const btn_heart_446 = document.querySelector("#btn-heart-446");
const btn_heart_447 = document.querySelector("#btn-heart-447");
const btn_heart_448 = document.querySelector("#btn-heart-448");
const btn_heart_449 = document.querySelector("#btn-heart-449");
const btn_heart_450 = document.querySelector("#btn-heart-450");
const btn_heart_451 = document.querySelector("#btn-heart-451");
const btn_heart_452 = document.querySelector("#btn-heart-452");
const btn_heart_453 = document.querySelector("#btn-heart-453");
const btn_heart_454 = document.querySelector("#btn-heart-454");
const btn_heart_455 = document.querySelector("#btn-heart-455");
const btn_heart_456 = document.querySelector("#btn-heart-456");
const btn_heart_457 = document.querySelector("#btn-heart-457");
const btn_heart_458 = document.querySelector("#btn-heart-458");
const btn_heart_459 = document.querySelector("#btn-heart-459");
const btn_heart_460 = document.querySelector("#btn-heart-460");
const btn_heart_461 = document.querySelector("#btn-heart-461");
let fav7 = [
    {
    id: 441, 
        nome:"A Canção de Aquiles",
        autor:"Madeline Miller",
        img: `src="imagens dos livros/categoria romance/A canção de Aquiles - Madeline Miller.jfif" class="a-anuncio-1"
        style="width: 140px;"`,
        preco: 34.99
    },
    {
        id: 442, 
        nome:"A culpa é das estrelas",
        autor:"John Green",
        img: `src="imagens dos livros/categoria romance/A culpa é das estrelas - John green.jpg" class="a-anuncio-1"
        style="width: 135px; margin-right: 15px; margin-top: 1px;"`,
        preco: 79.99
    },
    {
    id: 443, 
        nome:"Aristóteles e Dante descobrem os segredos do universo",
        autor:"Benjamin Alire",
        img: 'src="imagens dos livros/categoria romance/Aristóteles e Dante descobrem os segredos do universo - Benjamin Alire.jpg" class="a-anuncio-1" style="width: 130px;  margin-bottom: 10px;"',
        preco: 29.99,
    },
    {
    id: 444, 
        nome:"Como eu era antes de você",
        autor:"Jojo Moyes",
        img: 'src="imagens dos livros/categoria romance/Como   eu era antes de você livro - Jojo Moyes.jpg" class="a-anuncio-1" style="width: 205px;"',
        preco: 19.99,
    },
    {
    id: 445, 
        nome:"Crepúsculo",
        autor:"Nicole Barbola",
        img: 'src="imagens dos livros/categoria romance/Crepúsculo - Nicola Barbola.jpg" class="a-anuncio-1" style="width: 183px; margin-top: 3px;"',
        preco: 41.99,
    },
    {
    id: 446, 
        nome:"Dom Casmurro",
        autor:"Machado de Assis",
        img: 'src="imagens dos livros/categoria romance/Dom Casmurro - Machado de Assis.jpg" class="a-anuncio-1" style="width: 135px; margin-top: 3px;"',
        preco: 27.99,
    },
    {
    id: 447, 
        nome:"É assim que acaba",
        autor:"Collen Hover",
        img: 'src="imagens dos livros/categoria romance/é assim que acaba - colleen hoover.jpg" class="a-anuncio-1" style="width: 130px;"',
        preco: 31.99,
    },
    {
    id: 448, 
        nome:"Garota exemplar",
        autor:"Gillian Flynn",
        img: 'src="imagens dos livros/categoria romance/Garota exemplar -Gillian Flynn.jpg" class="a-anuncio-1" style="width: 140px;"',
        preco: 38.99,
    },
    {
    id: 449, 
        nome:"Intermitências da morte",
        autor:"José Saramago",
        img: 'src="imagens dos livros/categoria romance/Intermitências da morte - José Saramago.jpg" class="a-anuncio-1" style="width: 135px;"',
        preco: 56.99,
    },
    {
    id: 450, 
        nome:"Madame Bovary",
        autor:"Gustofe Flauver",
        img: 'src="imagens dos livros/categoria romance/Madame Bovary - Gustofe flauver.jfif" class="a-anuncio-1" style="width: 135px; margin-right: 10px;"',
        preco: 18.99,
    },
    {
    id: 451, 
        nome:"O amor nos tempos do Cólera Gabriel",
        autor:"Gárcia Márquez",
        img: 'src="imagens dos livros/categoria romance/O amor nos tempos do cólera Gabriel - Gárcia Márquez.png" class="a-anuncio-1" style="width: 135px;"',
        preco: 29.99,
    },
    {
    id: 452, 
        nome:"O grande gatsby",
        autor:"Scott Fitzgerald",
        img: 'src="imagens dos livros/categoria romance/O grande gatsby -  F. Scott Fitzgerald.jfif" class="a-anuncio-1" style="width: 132.5px;"',
        preco: 49.99,
    },
    {
    id: 453, 
        nome:"O morro dos ventos uivantes",
        autor:"Emily Bronte",
        img: 'src="imagens dos livros/categoria romance/O morro dos ventos uivantes - Emily Bronte.jpg" class="a-anuncio-1" style="width: 140px;"',
        preco: 48.99,
    },
    {
    id: 454, 
        nome:"Orgulho e Preconceito",
        autor:"Jane Austen",
        img: 'src="imagens dos livros/categoria romance/Orgulho e Preconceito - Jane Austen.jpg" class="a-anuncio-1" style="width: 135px;"',
        preco: 16.99,
    },
]

// conversão de valores para string que não é feita automaticamente pelo local storage

// localStorage.setItem("livro", JSON.stringify(fav));

// const getFav  = localStorage.getItem("livro");

// const favoritosObjeto = JSON.parse(getFav);

// console.log(favoritosObjeto);

// localStorage.clear()

// localStorage.removeItem("");


btn_heart_441.addEventListener("click", function(){
//    localStorage.setItem("livro", JSON.stringify(fav[0]));

//    let getFav  = localStorage.getItem("livro");

//    let favoritosObjeto = JSON.parse(getFav);

    produtosFavoritos.push(fav7[0]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
    // console.log(favoritosObjeto)

    // listarLivro();

})
btn_heart_442.addEventListener("click", function(){
    produtosFavoritos.push(fav7[1]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));

})
btn_heart_443.addEventListener("click", function(){
    produtosFavoritos.push(fav7[2]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_444.addEventListener("click", function(){
    produtosFavoritos.push(fav7[3]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_445.addEventListener("click", function(){
    produtosFavoritos.push(fav7[4]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_446.addEventListener("click", function(){
    produtosFavoritos.push(fav7[5]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_447.addEventListener("click", function(){
    produtosFavoritos.push(fav7[6]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_448.addEventListener("click", function(){
    produtosFavoritos.push(fav7[7]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_449.addEventListener("click", function(){
    produtosFavoritos.push(fav7[8]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_450.addEventListener("click", function(){
    produtosFavoritos.push(fav7[9]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_451.addEventListener("click", function(){
    produtosFavoritos.push(fav7[10]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_452.addEventListener("click", function(){
    produtosFavoritos.push(fav7[11]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_453.addEventListener("click", function(){
    produtosFavoritos.push(fav7[12]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_454.addEventListener("click", function(){
    produtosFavoritos.push(fav7[13]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_455.addEventListener("click", function(){
    produtosFavoritos.push(fav7[14]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_456.addEventListener("click", function(){
    produtosFavoritos.push(fav7[15]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_457.addEventListener("click", function(){
    produtosFavoritos.push(fav7[16]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_458.addEventListener("click", function(){
    produtosFavoritos.push(fav7[17]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_459.addEventListener("click", function(){
    produtosFavoritos.push(fav7[18]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_450.addEventListener("click", function(){
    produtosFavoritos.push(fav7[19]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_451.addEventListener("click", function(){
    produtosFavoritos.push(fav7[20]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})