const precoTotal = document.querySelector(".total_preco_side");
const inputDuracaoMusica = document.getElementById("txtduracao");
const lista_sidebar = document.querySelector(".lista_sidebar");

const shopping_cart_111 = document.querySelector("#shopping_cart_111");
const shopping_cart_112 = document.querySelector("#shopping_cart_112");
const shopping_cart_113 = document.querySelector("#shopping_cart_113");
const shopping_cart_114 = document.querySelector("#shopping_cart_114");
const shopping_cart_115 = document.querySelector("#shopping_cart_115");
const shopping_cart_116 = document.querySelector("#shopping_cart_116");
const shopping_cart_117 = document.querySelector("#shopping_cart_117");
const shopping_cart_118 = document.querySelector("#shopping_cart_118");
const shopping_cart_119 = document.querySelector("#shopping_cart_119");
const shopping_cart_1110 = document.querySelector("#shopping_cart_1110");
const shopping_cart_1111 = document.querySelector("#shopping_cart_1111");
const shopping_cart_1112 = document.querySelector("#shopping_cart_1112");
const shopping_cart_1113 = document.querySelector("#shopping_cart_1113");
const shopping_cart_1114 = document.querySelector("#shopping_cart_1114");
const shopping_cart_1115 = document.querySelector("#shopping_cart_1115");
const shopping_cart_1116 = document.querySelector("#shopping_cart_1116");
const shopping_cart_1117 = document.querySelector("#shopping_cart_1117");
const shopping_cart_1118 = document.querySelector("#shopping_cart_1118");
const shopping_cart_1119 = document.querySelector("#shopping_cart_1119");
const shopping_cart_1120 = document.querySelector("#shopping_cart_1120");
const shopping_cart_1121 = document.querySelector("#shopping_cart_1121");


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

shopping_cart_111.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros brasileiros/A hora da estrela, Clarice Lispector.jpg" class="a-anuncio-1"
    style="margin-left: 20px;"`,
    preco: 34.99
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_112.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros brasileiros/A paixão segundo G.H., Clarice Lispector.JPG" class="a-anuncio-1"
        style="width: 140px; margin-right: 15px; margin-top: 10px;"`,
        preco: 50.00
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_113.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros brasileiros/Eu, Augusto dos Anjos.jfif" class="a-anuncio-1" style="width: 135px;"',
        preco: 48.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_114.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros brasileiros/Dom Casmurro, Machado de Assis.png" class="a-anuncio-1" style="width: 178px;  height: 200px;"',
        preco: 19.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_115.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros brasileiros/Grande sertão veredas - Guimarães Rosa.jpg" class="a-anuncio-1" style="width: 150px; margin-top: 3px;"',
        preco: 41.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_116.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros brasileiros/Macunaíma , Mário de Andrade.png" class="a-anuncio-1" style="width: 180px; margin-top: 20px; height: 180px;"',
        preco: 27.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_117.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros brasileiros/Memórias sgto de milícias, Manuel A. de Almeida.jpg" class="a-anuncio-1" style="width: 130px; height: 205px;"',
        preco: 31.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_118.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros brasileiros/o cortico - aluisio azevedo.jpg" class="a-anuncio-1" style="margin-right: 25px; margin-top: 16.5px; height: 185px;"',
        preco: 38.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_119.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros brasileiros/os sertoes - euclides da cunha.jpg" class="a-anuncio-1" style="width: 200px;"',
        preco: 56.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_1110.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros brasileiros/Quincas Borba, Machado de Assis.png" class="a-anuncio-1" style="width: 150px;"',
        preco: 18.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_1111.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros brasileiros/São Bernardo, Graciliano Ramos.png" class="a-anuncio-1" style="width: 200px;"',
        preco: 29.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_1112.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros brasileiros/vidas secas - graciliano ramos.jpg" class="a-anuncio-1" style="width: 270px;"',
        preco: 49.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_1113.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/harry poter e a camara secreta.png" class="a-anuncio-1"',
        preco: 48.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_1114.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="img-anuncios/borboletas no jardim.png" class="a-anuncio-1" style="width: 205px;"',
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





const btn_heart_111 = document.querySelector("#btn-heart-111");
const btn_heart_112 = document.querySelector("#btn-heart-112");
const btn_heart_113 = document.querySelector("#btn-heart-113");
const btn_heart_114 = document.querySelector("#btn-heart-114");
const btn_heart_115 = document.querySelector("#btn-heart-115");
const btn_heart_116 = document.querySelector("#btn-heart-116");
const btn_heart_117 = document.querySelector("#btn-heart-117");
const btn_heart_118 = document.querySelector("#btn-heart-118");
const btn_heart_119 = document.querySelector("#btn-heart-119");
const btn_heart_1110 = document.querySelector("#btn-heart-1110");
const btn_heart_1111 = document.querySelector("#btn-heart-1111");
const btn_heart_1112 = document.querySelector("#btn-heart-1112");
const btn_heart_1113 = document.querySelector("#btn-heart-1113");
const btn_heart_1114 = document.querySelector("#btn-heart-1114");
const btn_heart_1115 = document.querySelector("#btn-heart-1115");
const btn_heart_1116 = document.querySelector("#btn-heart-1116");
const btn_heart_1117 = document.querySelector("#btn-heart-1117");
const btn_heart_1118 = document.querySelector("#btn-heart-1118");
const btn_heart_1119 = document.querySelector("#btn-heart-1119");
const btn_heart_1120 = document.querySelector("#btn-heart-1120");
const btn_heart_1121 = document.querySelector("#btn-heart-1121");
let fav21 = [
    {
    id: 111, 
    nome:"A hora da estrela",
    autor:"Clarice Lispector",
    img: `src="imagens dos livros/livros brasileiros/A hora da estrela, Clarice Lispector.jpg" class="a-anuncio-1"
    style="margin-left: 20px;"`,
    preco: 34.99
    },
    {
        id: 112, 
        nome:"A paixão segundo G.H.",
        autor:"Clarice Lispector",
        img: `src="imagens dos livros/livros brasileiros/A paixão segundo G.H., Clarice Lispector.JPG" class="a-anuncio-1" style="width: 140px; margin-right: 15px; margin-top: 10px;"`,
        preco: 50.00
    },
    {
    id: 113, 
        nome:"Angústia",
        autor:"Graciliano Ramos",
        img: 'src="imagens dos livros/livros brasileiros/Angústia, Graciliano Ramos.jpg" class="a-anuncio-1" style="width: 220px; margin-top: 1px; margin-bottom: 10px; height: 185px;"',
        preco: 29.99,
    },
    {
    id: 114, 
        nome:"Orgulho e Preconceito",
        autor:"Jane Austen",
        img: 'src="imagens dos livros/livros brasileiros/Dom Casmurro, Machado de Assis.png" class="a-anuncio-1" style="width: 178px;  height: 200px;"',
        preco: 19.99,
    },
    {
    id: 115, 
        nome:"Grande sertão veredas",
        autor:"Guimarães Rosa",
        img: 'src="imagens dos livros/livros brasileiros/Grande sertão veredas - Guimarães Rosa.jpg" class="a-anuncio-1" style="width: 150px; margin-top: 3px;"',
        preco: 41.99,
    },
    {
    id: 116, 
        nome:"Macunaíma",
        autor:"Mário de Andrade",
        img: 'src="imagens dos livros/livros brasileiros/Macunaíma , Mário de Andrade.png" class="a-anuncio-1" style="width: 180px; margin-top: 20px; height: 180px;"',
        preco: 27.99,
    },
    {
    id: 117, 
        nome:"Memórias sgto de milícias",
        autor:"Manuel A. de Almeida",
        img: 'src="imagens dos livros/livros brasileiros/Memórias sgto de milícias, Manuel A. de Almeida.jpg" class="a-anuncio-1" style="width: 130px; height: 205px;"',
        preco: 31.99,
    },
    {
    id: 118, 
        nome:"O Cortiço",
        autor:"Aluisio Azevedo",
        img: 'src="imagens dos livros/livros brasileiros/o cortico - aluisio azevedo.jpg" class="a-anuncio-1" style="margin-right: 25px; margin-top: 16.5px; height: 185px;"',
        preco: 38.99,
    },
    {
    id: 119, 
        nome:"Os Sertões",
        autor:"Euclides da Cunha",
        img: 'src="imagens dos livros/livros brasileiros/os sertoes - euclides da cunha.jpg" class="a-anuncio-1" style="width: 200px;"',
        preco: 56.99,
    },
    {
    id: 1110, 
        nome:"Quincas Borba",
        autor:"Machado de Assis",
        img: 'src="imagens dos livros/livros brasileiros/Quincas Borba, Machado de Assis.png" class="a-anuncio-1" style="width: 150px;"',
        preco: 18.99,
    },
    {
    id: 1111, 
        nome:"São Bernardo",
        autor:"Graciliano Ramos",
        img: 'src="imagens dos livros/livros brasileiros/São Bernardo, Graciliano Ramos.png" class="a-anuncio-1" style="width: 200px;"',
        preco: 29.99,
    },
    {
    id: 1112, 
        nome:"Vidas Secas",
        autor:"Graciliano Ramos",
        img: 'src="imagens dos livros/livros brasileiros/vidas secas - graciliano ramos.jpg" class="a-anuncio-1" style="width: 270px;"',
        preco: 49.99,
    },
    {
    id: 1113, 
        nome:"Eu",
        autor:"Augusto dos Anjos",
        img: 'src="imagens dos livros/livros brasileiros/Eu, Augusto dos Anjos.jfif" class="a-anuncio-1" style="width: 135px;"',
        preco: 48.99,
    },
    {
    id: 1114, 
        nome:"O Jardim das Borboletas",
        autor:"Dot Hutchinson",
        img: 'src="img-anuncios/borboletas no jardim.png" class="a-anuncio-1" style="width: 205px;"',
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


btn_heart_111.addEventListener("click", function(){
//    localStorage.setItem("livro", JSON.stringify(fav[0]));

//    let getFav  = localStorage.getItem("livro");

//    let favoritosObjeto = JSON.parse(getFav);

    produtosFavoritos.push(fav21[0]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
    // console.log(favoritosObjeto)

    // listarLivro();

})
btn_heart_112.addEventListener("click", function(){
    produtosFavoritos.push(fav21[1]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));

})
btn_heart_113.addEventListener("click", function(){
    produtosFavoritos.push(fav21[2]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_114.addEventListener("click", function(){
    produtosFavoritos.push(fav21[3]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_115.addEventListener("click", function(){
    produtosFavoritos.push(fav21[4]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_116.addEventListener("click", function(){
    produtosFavoritos.push(fav21[5]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_117.addEventListener("click", function(){
    produtosFavoritos.push(fav21[6]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_118.addEventListener("click", function(){
    produtosFavoritos.push(fav21[7]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_119.addEventListener("click", function(){
    produtosFavoritos.push(fav21[8]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_1110.addEventListener("click", function(){
    produtosFavoritos.push(fav21[9]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_1111.addEventListener("click", function(){
    produtosFavoritos.push(fav21[10]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_1112.addEventListener("click", function(){
    produtosFavoritos.push(fav21[11]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_1113.addEventListener("click", function(){
    produtosFavoritos.push(fav21[12]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_1114.addEventListener("click", function(){
    produtosFavoritos.push(fav21[13]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_1115.addEventListener("click", function(){
    produtosFavoritos.push(fav21[14]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_1116.addEventListener("click", function(){
    produtosFavoritos.push(fav21[15]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_1117.addEventListener("click", function(){
    produtosFavoritos.push(fav21[16]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_1118.addEventListener("click", function(){
    produtosFavoritos.push(fav21[17]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_1119.addEventListener("click", function(){
    produtosFavoritos.push(fav21[18]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_1120.addEventListener("click", function(){
    produtosFavoritos.push(fav21[19]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_1121.addEventListener("click", function(){
    produtosFavoritos.push(fav21[20]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})

