const btnRemover = document.querySelector(".img_remover");


// const estrela = document.querySelectorAll(".star-icon");

let produtos = [];

function listarProdutos(){
    lista.innerHTML = "";
    produtos.forEach(function(objeto, posicao, img){
        lista.innerHTML +=
        `
        <div class="item">
        <div class="livro">
            <div class="remover">
            <a href="javascript:removerProduto(${posicao})">
                <img src="img/circle-xmark-regular.svg" class="img_remover" alt="remover livro">
            </a>
            </div>
            <img src="${img}.jpg" class="img_livro" alt="livro adicionado">
            <span class="name">${objeto.nome}</span>
            <ul class="avaliacao">
                <li class="star-icon ativo" data-avaliacao="1"></li>
                <li class="star-icon" data-avaliacao="2"></li>
                <li class="star-icon" data-avaliacao="3"></li>
                <li class="star-icon" data-avaliacao="4"></li>
                <li class="star-icon" data-avaliacao="5"></li>
            </ul>
            <div class="adicionar_carrinho">
                <span class="preco_livro">R$50.00</span>
                <img class="shopping_cart_favorites" src="img/shopping-cart.webp" alt="">
            </div>
        </div>
    </div>
        `
    })
}

function removerProduto(posicao){
    produtos.splice(posicao, 1);
    listarProdutos();
}

// document.addEventListener("click", (estrela_selecionada)=>{
//     let classEstrela = estrela_selecionada.target.classList;
//     if(!classEstrela.contains('ativo')){
//         estrela.forEach(function(estrela_selecionada){
//           estrela_selecionada.classList.remove('ativo');
//         });
//         classEstrela.add('ativo');
//         console.log(estrela_selecionada.target.getAttribute('data-avaliacao'));
//       }
// });
