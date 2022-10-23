const lista = document.querySelector(".lista");
let livroAtual = localStorage.getItem("livro");
let livroAtualObj = JSON.parse(livroAtual);


function listarLivro(){

        let livros = JSON.parse(localStorage.getItem("livro"));

        console.log(livros);
        livros.forEach(livro => {
                lista.innerHTML+=
                        `
                        <div class="item">
                        <div class="livro">
                        <img ${livro.img}></img>
                        <span class="name">${livro.nome}</span>
                        <div class="adicionar_carrinho">
                        <span class="preco_livro">R$${livro.preco}</span>
                        <img class="shopping_cart_favorites" src="img/shopping-cart.webp" alt="">
                        </div>
                        </div>
                        </div>`
        });
}

listarLivro();
