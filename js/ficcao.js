const precoTotal = document.querySelector(".total_preco_side");
const inputDuracaoMusica = document.getElementById("txtduracao");
const lista_sidebar = document.querySelector(".lista_sidebar");

const shopping_cart_221 = document.querySelector("#shopping_cart_221");
const shopping_cart_222 = document.querySelector("#shopping_cart_222");
const shopping_cart_223 = document.querySelector("#shopping_cart_223");
const shopping_cart_224 = document.querySelector("#shopping_cart_224");
const shopping_cart_225 = document.querySelector("#shopping_cart_225");
const shopping_cart_226 = document.querySelector("#shopping_cart_226");
const shopping_cart_227 = document.querySelector("#shopping_cart_227");
const shopping_cart_228 = document.querySelector("#shopping_cart_228");
const shopping_cart_229 = document.querySelector("#shopping_cart_229");
const shopping_cart_2210 = document.querySelector("#shopping_cart_2210");
const shopping_cart_2211 = document.querySelector("#shopping_cart_2211");
const shopping_cart_2212 = document.querySelector("#shopping_cart_2212");
const shopping_cart_2213 = document.querySelector("#shopping_cart_2213");
const shopping_cart_2214 = document.querySelector("#shopping_cart_2214");



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

shopping_cart_221.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/2001 uma odisseia no espaco - arther c.clarke.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 34.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_222.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/2084 - james lawrence powell.png" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 79.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_223.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/a batalha do apocalipse - eduardo spohe.png" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 29.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_224.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/a biblioteca da meia noite - matt haig.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 19.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_225.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/a telepatia sao os outros - ana rusche.png" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 41.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_226.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/count zero - willian gibson.png" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 27.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_227.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/filhos do eden - eduardo spohr.png" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 31.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_228.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/guerra do velho - john scalzi.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 38.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_229.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/metafisica trilogica - norberto r. kepp.png" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 56.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_2210.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/o homem invisivel - h.g wells.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 18.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_2211.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/o inferno é aqui - andre schuck.png" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 29.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_2212.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/o lugar do inicio - ursula k. le guin.png" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 49.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_2213.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/skiward - brandon sanderson.png" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 48.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_2214.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros ficcao/viajantes do abismo - nikelen witter.png" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"',
        preco: 36.99,
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
const btn_heart_221 = document.querySelector("#btn-heart-221");
const btn_heart_222 = document.querySelector("#btn-heart-222");
const btn_heart_223 = document.querySelector("#btn-heart-223");
const btn_heart_224 = document.querySelector("#btn-heart-224");
const btn_heart_225 = document.querySelector("#btn-heart-225");
const btn_heart_226 = document.querySelector("#btn-heart-226");
const btn_heart_227 = document.querySelector("#btn-heart-227");
const btn_heart_228 = document.querySelector("#btn-heart-228");
const btn_heart_229 = document.querySelector("#btn-heart-229");
const btn_heart_2210 = document.querySelector("#btn-heart-2210");
const btn_heart_2211 = document.querySelector("#btn-heart-2211");
const btn_heart_2212 = document.querySelector("#btn-heart-2212");
const btn_heart_2213 = document.querySelector("#btn-heart-2213");
const btn_heart_2214 = document.querySelector("#btn-heart-2214");

let fav22 = [
    {
    id: 221, 
    nome:"2001 Uma Odisseia no Espaço",
    autor:"Arther C.Clarke",
    img: `src="imagens dos livros/livros ficcao/2001 uma odisseia no espaco - arther c.clarke.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
    preco: 50.00
    },
    {
        id: 222, 
        nome:"2084",
        autor:"James Lawrence Powell",
        img: `src="imagens dos livros/livros ficcao/2084 - james lawrence powell.png" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 50.00
    },
    {
    id: 223, 
        nome:"A Batalha do Apocalipse",
        autor:"Eduardo Spohe",
        img: 'src="imagens dos livros/livros ficcao/a batalha do apocalipse - eduardo spohe.png" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 29.99,
    },
    {
    id: 224, 
        nome:"A Biblioteca da Meia Noite",
        autor:"Matt Haig",
        img: 'src="imagens dos livros/livros ficcao/a biblioteca da meia noite - matt haig.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 19.99,
    },
    {
    id: 225, 
        nome:"A Telepatia são os Outros",
        autor:"Ana Rusche",
        img: 'src="imagens dos livros/livros ficcao/a telepatia sao os outros - ana rusche.png" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 41.99,
    },
    {
    id: 226, 
        nome:"Count Zero",
        autor:"Willian Gibson",
        img: 'src="imagens dos livros/livros ficcao/count zero - willian gibson.png" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 27.99,
    },
    {
    id: 227, 
        nome:"Filhos do Eden",
        autor:"Eduardo Spohr",
        img: 'src="imagens dos livros/livros ficcao/filhos do eden - eduardo spohr.png" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 31.99,
    },
    {
    id: 228, 
        nome:"Guerra do Velho",
        autor:"John Scalzi",
        img: 'src="imagens dos livros/livros ficcao/guerra do velho - john scalzi.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 38.99,
        preco: 50.00
    },
    {
    id: 229, 
        nome:"Metafisica Trilogica",
        autor:"Norberto R. Kepp",
        img: 'src="imagens dos livros/livros ficcao/metafisica trilogica - norberto r. kepp.png" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 56.99,
    },
    {
    id: 2210, 
        nome:"O Homem Invisivel",
        autor:"H.g Wells",
        img: 'src="imagens dos livros/livros ficcao/o homem invisivel - h.g wells.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 18.99,
    },
    {
    id: 2211, 
        nome:"O inferno é aqui",
        autor:"Andre Schuck",
        img: 'src="imagens dos livros/livros ficcao/o inferno é aqui - andre schuck.png" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 29.99,
    },
    {
    id: 2212, 
        nome:"O lugar do Início",
        autor:"Ursula K. Le Guin",
        img: 'src="imagens dos livros/livros ficcao/o lugar do inicio - ursula k. le guin.png" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 49.99,
    },
    {
    id: 2213, 
        nome:"Skiward",
        autor:"Brandon Sanderson",
        img: 'src="imagens dos livros/livros ficcao/skiward - brandon sanderson.png" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 48.99,
    },
    {
    id: 2214, 
        nome:"Viajantes do Abismo",
        autor:"Nikelen Witter",
        img: 'src="imagens dos livros/livros ficcao/viajantes do abismo - nikelen witter.png" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
        preco: 36.99,
    },
]

// conversão de valores para string que não é feita automaticamente pelo local storage

// localStorage.setItem("livro", JSON.stringifyv22));

// const gev22  = localStorage.getItem("livro");

// constv22oritosObjeto = JSON.parse(gev22);

// console.logv22oritosObjeto);

// localStorage.clear()

// localStorage.removeItem("");


btn_heart_221.addEventListener("click", function(){
//    localStorage.setItem("livro", JSON.stringifyv22[0]));

//    let gev22  = localStorage.getItem("livro");

//    let favoritosObjeto = JSON.parse(getFav);

    produtosFavoritos.push(fav22[0]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
    // console.log(favoritosObjeto)

    // listarLivro();

})
btn_heart_222.addEventListener("click", function(){
    produtosFavoritos.push(fav22[1]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));

})
btn_heart_223.addEventListener("click", function(){
    produtosFavoritos.push(fav22[2]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_224.addEventListener("click", function(){
    produtosFavoritos.push(fav22[3]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_225.addEventListener("click", function(){
    produtosFavoritos.push(fav22[4]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_226.addEventListener("click", function(){
    produtosFavoritos.push(fav22[5]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_227.addEventListener("click", function(){
    produtosFavoritos.push(fav22[6]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_228.addEventListener("click", function(){
    produtosFavoritos.push(fav22[7]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_229.addEventListener("click", function(){
    produtosFavoritos.push(fav22[8]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_2210.addEventListener("click", function(){
    produtosFavoritos.push(fav22[9]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_2211.addEventListener("click", function(){
    produtosFavoritos.push(fav22[10]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_2212.addEventListener("click", function(){
    produtosFavoritos.push(fav22[11]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_2213.addEventListener("click", function(){
    produtosFavoritos.push(fav22[12]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_2214.addEventListener("click", function(){
    produtosFavoritos.push(fav22[13]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})