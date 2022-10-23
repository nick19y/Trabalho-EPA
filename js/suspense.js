const btn_heart_331 = document.querySelector("#btn-heart-331");
const btn_heart_332 = document.querySelector("#btn-heart-332");
const btn_heart_333 = document.querySelector("#btn-heart-333");
const btn_heart_334 = document.querySelector("#btn-heart-334");
const btn_heart_335 = document.querySelector("#btn-heart-335");
const btn_heart_336 = document.querySelector("#btn-heart-336");
const btn_heart_337 = document.querySelector("#btn-heart-337");
const btn_heart_338 = document.querySelector("#btn-heart-338");
const btn_heart_339 = document.querySelector("#btn-heart-339");
const btn_heart_3310 = document.querySelector("#btn-heart-3310");
const btn_heart_3311 = document.querySelector("#btn-heart-3311");
const btn_heart_3312 = document.querySelector("#btn-heart-3312");
const btn_heart_3313 = document.querySelector("#btn-heart-3313");
const btn_heart_3314 = document.querySelector("#btn-heart-3314");
// const btn_heart_3315 = document.querySelector("#btn-heart-3315");
// const btn_heart_3316 = document.querySelector("#btn-heart-3316");
// const btn_heart_3317 = document.querySelector("#btn-heart-3317");
// const btn_heart_3318 = document.querySelector("#btn-heart-3318");
// const btn_heart_3319 = document.querySelector("#btn-heart-3319");
// const btn_heart_3320 = document.querySelector("#btn-heart-3320");
// const btn_heart_3321 = document.querySelector("#btn-heart-3321");
let fav3 = [
    {
    id: 331, 
    nome:"A era dos mortos",
    autor:"Rodrigo de oliveira",
    img: 'src="imagens dos livros/livros suspense/a era dos mortos - rodrigo de oliveira.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"',
    preco: 34.99
    },
    {
        id: 332, 
        nome:"A forma água",
        autor:"Guillermo del toro",
        img: `src="imagens dos livros/livros suspense/a forma da agua - guillermo del toro.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 79.99
    },
    {
    id: 333, 
        nome:"A garota do lago",
        autor:"Charlie donlea",
        img: `src="imagens dos livros/livros suspense/a garota do lago - charlie donlea.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 29.99
    },
    {
    id: 334, 
        nome:"A garota no gelo",
        autor:"Robert bryndza",
        img: `src="imagens dos livros/livros suspense/a garota no gelo - robert bryndza.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 19.99
    },
    {
    id: 335, 
        nome:"A paciente silenciosa",
        autor:"Alex michadelis",
        img: `src="imagens dos livros/livros suspense/a paciente silenciosa - alex michadelis.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 41.99,
    },
    {
    id: 336, 
        nome:"Caixa de passaros",
        autor:"Josh malerman",
        img: `src="imagens dos livros/livros suspense/caixa de passsaros - josh malerman.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 27.99,
    },
    {
    id: 337, 
        nome:"E não sobrou nenhum",
        autor:"Agatha christie",
        img: `src="imagens dos livros/livros suspense/e nao sobrou nenhum - agatha christie.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 31.99,
    },
    {
    id: 338, 
        nome:"Homem de giz",
        autor:"C.j tudor",
        img: `src="imagens dos livros/livros suspense/homem de giz- c.j tudor.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 38.99
    },
    {
    id: 339, 
        nome:"O colecionador",
        autor:"John fowles",
        img: `src="imagens dos livros/livros suspense/o colecionador - john fowles.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 56.99,
    },
    {
    id: 3310, 
        nome:"O demonio da cidade branca",
        autor:"Erik larson",
        img: `src="imagens dos livros/livros suspense/o demonio da cidade branca - erik larson.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 18.99,
    },
    {
    id: 3311, 
        nome:"O quarto dia",
        autor:"Sarah lotz",
        img: `src="imagens dos livros/livros suspense/o quarto dia - sarah lotz.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 29.99,
    },
    {
    id: 3312, 
        nome:"O talentoso ripley",
        autor:"Patricia highsmith",
        img:`  src="imagens dos livros/livros suspense/o talentoso ripley - patricia highsmith.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 49.99,
    },
    {
    id: 3313, 
        nome:"O ultimo folego",
        autor:"Robert bryndza",
        img: `src="imagens dos livros/livros suspense/o ultimo folego - robert bryndza.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 48.99,
    },
    {
    id: 3314, 
        nome:"Seis anos depois",
        autor:" Harlan coben",
        img: `src="imagens dos livros/livros suspense/seis anos depois - harlan coben.jpg" class="a-anuncio-1" style="width: 137.5px; height: 200px;"`,
        preco: 36.99,
    },
    // {
    // id: 3315, 
    //     nome:"Frankenstein",
    //     autor:"Mary Shelley",
    //     img: 'src="img-anuncios/frankenstein.png" class="a-anuncio-1""',
    //     preco: 23.99,
    // },
    // {
    // id: 3316, 
    //     nome:"Guerra do Velho",
    //     autor:"John Scalzi",
    //     img: 'src="img-anuncios/guerra do velho.png" class="a-anuncio-1"',
    //     preco: 48.99,
    // },
    // {
    // id: 3317, 
    //     nome:"A Garota do Lago",
    //     autor:"Charile Donlea",
    //     img: 'src="img-anuncios/a garota do lago.png" class="a-anuncio-1"',
    //     preco: 26.99,
    // },
    // {
    // id: 3318, 
    //     nome:"A Biblioteca da Meia-Noite",
    //     autor:"Matt Haig",
    //     img: 'src="img-anuncios/a biblioteca da meia noite.png" class="a-anuncio-1"',
    //     preco: 34.99,
    // },
    // {
    // id: 3319, 
    //     nome:"Vidas Secas",
    //     autor:"Graciliano Ramos",
    //     img: 'src="img-anuncios/vidas secas.png" class="a-anuncio-1"',
    //     preco: 45.99,
    // },
    // {
    // id: 3320, 
    //     nome:"A Cabana da Solidão",
    //     autor:"Antonio Demarchi",
    //     img: 'src="img-anuncios/a cabana da solidao.png" class="a-anuncio-1"',
    //     preco: 19.99,
    // },
    // {
    // id: 3321, 
    //     nome:"O Poder da Manipulação",
    //     autor:"Jacob Petry",
    //     img: 'src="img-anuncios/o poder da manipulação.png" class="a-anuncio-1"',
    //     preco: 32.99,
    // },
]

// conversão de valores para string que não é feita automaticamente pelo local storage

// localStorage.setItem("livro", JSON.stringify(fav));

// const getFav  = localStorage.getItem("livro");

// const favoritosObjeto = JSON.parse(getFav);

// console.log(favoritosObjeto);

// localStorage.clear()

// localStorage.removeItem("");


btn_heart_331.addEventListener("click", function(){
//    localStorage.setItem("livro", JSON.stringify(fav[0]));

//    let getFav  = localStorage.getItem("livro");

//    let favoritosObjeto = JSON.parse(getFav);

    produtosFavoritos.push(fav3[0]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
    // console.log(favoritosObjeto)

    // listarLivro();

})
btn_heart_332.addEventListener("click", function(){
    produtosFavoritos.push(fav3[1]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));

})
btn_heart_333.addEventListener("click", function(){
    produtosFavoritos.push(fav3[2]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_334.addEventListener("click", function(){
    produtosFavoritos.push(fav3[3]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_335.addEventListener("click", function(){
    produtosFavoritos.push(fav3[4]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_336.addEventListener("click", function(){
    produtosFavoritos.push(fav3[5]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_337.addEventListener("click", function(){
    produtosFavoritos.push(fav3[6]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_338.addEventListener("click", function(){
    produtosFavoritos.push(fav3[7]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_339.addEventListener("click", function(){
    produtosFavoritos.push(fav3[8]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_3310.addEventListener("click", function(){
    produtosFavoritos.push(fav3[9]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_3311.addEventListener("click", function(){
    produtosFavoritos.push(fav3[10]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_3312.addEventListener("click", function(){
    produtosFavoritos.push(fav3[11]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_3313.addEventListener("click", function(){
    produtosFavoritos.push(fav3[12]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_3314.addEventListener("click", function(){
    produtosFavoritos.push(fav3[13]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
// btn_heart_3315.addEventListener("click", function(){
//     produtosFavoritos.push(fav[14]);
//     localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
// })
// btn_heart_3316.addEventListener("click", function(){
//     produtosFavoritos.push(fav[15]);
//     localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
// })
// btn_heart_3317.addEventListener("click", function(){
//     produtosFavoritos.push(fav[16]);
//     localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
// })
// btn_heart_3318.addEventListener("click", function(){
//     produtosFavoritos.push(fav[17]);
//     localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
// })
// btn_heart_3319.addEventListener("click", function(){
//     produtosFavoritos.push(fav[18]);
//     localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
// })
// btn_heart_3320.addEventListener("click", function(){
//     produtosFavoritos.push(fav[19]);
//     localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
// })
// btn_heart_3321.addEventListener("click", function(){
//     produtosFavoritos.push(fav[20]);
//     localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
// })



const precoTotal = document.querySelector(".total_preco_side");
const inputDuracaoMusica = document.getElementById("txtduracao");
const lista_sidebar = document.querySelector(".lista_sidebar");

const shopping_cart_331 = document.querySelector("#shopping_cart_331");
const shopping_cart_332 = document.querySelector("#shopping_cart_332");
const shopping_cart_333 = document.querySelector("#shopping_cart_333");
const shopping_cart_334 = document.querySelector("#shopping_cart_334");
const shopping_cart_335 = document.querySelector("#shopping_cart_335");
const shopping_cart_336 = document.querySelector("#shopping_cart_336");
const shopping_cart_337 = document.querySelector("#shopping_cart_337");
const shopping_cart_338 = document.querySelector("#shopping_cart_338");
const shopping_cart_339 = document.querySelector("#shopping_cart_339");
const shopping_cart_3310 = document.querySelector("#shopping_cart_3310");
const shopping_cart_3311 = document.querySelector("#shopping_cart_3311");
const shopping_cart_3312 = document.querySelector("#shopping_cart_3312");
const shopping_cart_3313 = document.querySelector("#shopping_cart_3313");
const shopping_cart_3314 = document.querySelector("#shopping_cart_3314");
// const shopping_cart_3315 = document.querySelector("#shopping_cart_3315");
// const shopping_cart_3316 = document.querySelector("#shopping_cart_3316");
// const shopping_cart_3317 = document.querySelector("#shopping_cart_3317");
// const shopping_cart_3318 = document.querySelector("#shopping_cart_3318");
// const shopping_cart_3319 = document.querySelector("#shopping_cart_3319");
// const shopping_cart_3320 = document.querySelector("#shopping_cart_3320");
// const shopping_cart_3321 = document.querySelector("#shopping_cart_3321");


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

shopping_cart_331.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: 'src="imagens dos livros/livros suspense/a era dos mortos - rodrigo de oliveira.jpg" style="margin-left: -20px; width: 70.5px; height: 110px; border: 1px solid white;"',
    preco: 34.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_332.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros suspense/a forma da agua - guillermo del toro.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"`,
        preco: 79.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_333.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros suspense/a garota do lago - charlie donlea.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"`,
        preco: 29.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_334.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros suspense/a garota no gelo - robert bryndza.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"`,
        preco: 19.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_335.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros suspense/a paciente silenciosa - alex michadelis.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"`,
        preco: 41.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_336.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros suspense/caixa de passsaros - josh malerman.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"`,
        preco: 27.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_337.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros suspense/e nao sobrou nenhum - agatha christie.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"`,
        preco: 31.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_338.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros suspense/homem de giz- c.j tudor.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"`,
        preco: 38.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_339.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros suspense/o colecionador - john fowles.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"`,
        preco: 56.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_3310.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros suspense/o demonio da cidade branca - erik larson.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"`,
        preco: 18.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_3311.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros suspense/o quarto dia - sarah lotz.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"`,
        preco: 29.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_3312.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img:`  src="imagens dos livros/livros suspense/o talentoso ripley - patricia highsmith.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"`,
        preco: 49.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_3313.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros suspense/o ultimo folego - robert bryndza.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"`,
        preco: 48.99,
    })
    listarLivros();
    atualizarTotal();
});
shopping_cart_3314.addEventListener("click", ()=>{
    produtos_sidebar.push({
        img: `src="imagens dos livros/livros suspense/seis anos depois - harlan coben.jpg" class="a-anuncio-1" style="margin-left: -20px; width: 70.5px; height: 110px;"`,
        preco: 36.99,
    })
    listarLivros();
    atualizarTotal();
});
// shopping_cart_3315.addEventListener("click", ()=>{
//     produtos_sidebar.push({
//         img: 'src="img-anuncios/frankenstein.png" class="a-anuncio-1""',
//         preco: 23.99,
//     })
//     listarLivros();
//     atualizarTotal();
// });
// shopping_cart_3316.addEventListener("click", ()=>{
//     produtos_sidebar.push({
//         img: 'src="img-anuncios/guerra do velho.png" class="a-anuncio-1"',
//         preco: 48.99,
//     })
//     listarLivros();
//     atualizarTotal();
// });
// shopping_cart_3317.addEventListener("click", ()=>{
//     produtos_sidebar.push({
//         img: 'src="img-anuncios/a garota do lago.png" class="a-anuncio-1"',
//         preco: 26.99,
//     })
//     listarLivros();
//     atualizarTotal();
// });
// shopping_cart_3318.addEventListener("click", ()=>{
//     produtos_sidebar.push({
//         img: 'src="img-anuncios/a biblioteca da meia noite.png" class="a-anuncio-1"',
//         preco: 34.99,
//     })
//     listarLivros();
//     atualizarTotal();
// });
// shopping_cart_3319.addEventListener("click", ()=>{
//     produtos_sidebar.push({
//         img: 'src="img-anuncios/vidas secas.png" class="a-anuncio-1"',
//         preco: 45.99,
//     })
//     listarLivros();
//     atualizarTotal();
// });
// shopping_cart_3320.addEventListener("click", ()=>{
//     produtos_sidebar.push({
//         img: 'src="img-anuncios/a cabana da solidao.png" class="a-anuncio-1"',
//         preco: 19.99,
//     })
//     listarLivros();
//     atualizarTotal();
// });
// shopping_cart_3321.addEventListener("click", ()=>{
//     produtos_sidebar.push({
//         img: 'src="img-anuncios/o poder da manipulação.png" class="a-anuncio-1"',
//         preco: 32.99,
//     })
//     listarLivros();
//     atualizarTotal();
// });

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
