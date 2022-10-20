const btn_heart_1 = document.querySelector("#btn-heart-1");
const btn_heart_2 = document.querySelector("#btn-heart-2");
const btn_heart_3 = document.querySelector("#btn-heart-3");
const btn_heart_4 = document.querySelector("#btn-heart-4");
const btn_heart_5 = document.querySelector("#btn-heart-5");
const btn_heart_6 = document.querySelector("#btn-heart-6");
const btn_heart_7 = document.querySelector("#btn-heart-7");
const btn_heart_8 = document.querySelector("#btn-heart-8");
const btn_heart_9 = document.querySelector("#btn-heart-9");
const btn_heart_10 = document.querySelector("#btn-heart-10");
const btn_heart_11 = document.querySelector("#btn-heart-11");
const btn_heart_12 = document.querySelector("#btn-heart-12");
const btn_heart_13 = document.querySelector("#btn-heart-13");
const btn_heart_14 = document.querySelector("#btn-heart-14");
const btn_heart_15 = document.querySelector("#btn-heart-15");
const btn_heart_16 = document.querySelector("#btn-heart-16");
const btn_heart_17 = document.querySelector("#btn-heart-17");
const btn_heart_18 = document.querySelector("#btn-heart-18");
const btn_heart_19 = document.querySelector("#btn-heart-19");
const btn_heart_20 = document.querySelector("#btn-heart-20");
const btn_heart_21 = document.querySelector("#btn-heart-21");
let fav = [
    {
    id: 1, 
    nome:"O cortiço",
    autor:"Aluísio Azevedo",
    img: `src="img-anuncios/o cortiço.png" class="a-anuncio-1"
    style="margin-left: 20px;"`,
    preco: 50.00
    },
    {
        id: 2, 
        nome:"A culpa é das estrelas",
        autor:"John Green",
        img: `src="img-anuncios/a culpa é das estrelas.png" class="a-anuncio-1"
        style="width: 111px; margin-right: 15px; margin-top: 1px;"`,
        preco: 50.00
    },
    {
    id: 3, 
        nome:"O morro dos ventos uivantes",
        autor:"Emily Bronte",
        img: 'src="img-anuncios/o morro dos ventos uivantes.png" class="a-anuncio-1" ',
        preco: 29.99,
    },
    {
    id: 4, 
        nome:"Orgulho e Preconceito",
        autor:"Jane Austen",
        img: 'src="img-anuncios/orgulho e preconceito.jpg" class="a-anuncio-1"',
        preco: 19.99,
    },
    {
    id: 5, 
        nome:"É assim que acaba",
        autor:"Coollen Hoover",
        img: 'src="img-anuncios/e assim que acaba.png" class="a-anuncio-1"',
        preco: 41.99,
    },
    {
    id: 6, 
        nome:"A Arte da Guerra",
        autor:"Sun Tzu",
        img: 'src="img-anuncios/a arte da guerra.png" class="a-anuncio-1"',
        preco: 27.99,
    },
    {
    id: 7, 
        nome:"O homem de giz",
        autor:"C.J. Tudor",
        img: 'src="img-anuncios/o homem de giz.png" class="a-anuncio-1"',
        preco: 31.99,
    },
    {
    id: 8, 
        nome:"O Iluminado",
        autor:"Stephen King",
        img: 'src="img-anuncios/IT a coisa.jfif" class="a-anuncio-1"',
        preco: 38.99,
        preco: 50.00
    },
    {
    id: 9, 
        nome:"O Drácula",
        autor:"Bram Stoker",
        img: 'src="img-anuncios/o dracula.png" class="a-anuncio-1"',
        preco: 56.99,
    },
    {
    id: 10, 
        nome:"Os Sertões",
        autor:"Euclides da Cunha",
        img: 'src="img-anuncios/os sertoes.png" class="a-anuncio-1"',
        preco: 18.99,
    },
    {
    id: 11, 
        nome:"2001 Uma odisseia no Espaço",
        autor:"Arthur C. Clarke",
        img: 'src="img-anuncios/uma odisseia no espaco.png" class="a-anuncio-1"',
        preco: 29.99,
    },
    {
    id: 12, 
        nome:"Caixa de Pássaros",
        autor:"Josh Malerman",
        img: 'src="img-anuncios/caixa de passaros.png" class="a-anuncio-1"',
        preco: 49.99,
    },
    {
    id: 13, 
        nome:"Harry Potter e a Câmara Secreta",
        autor:"J. K. Rowling",
        img: 'src="img-anuncios/harry poter e a camara secreta.png" class="a-anuncio-1"',
        preco: 48.99,
    },
    {
    id: 14, 
        nome:"O Jardim das Borboletas",
        autor:"Dot Hutchinson",
        img: 'src="img-anuncios/borboletas no jardim.png" class="a-anuncio-1"',
        preco: 36.99,
    },
    {
    id: 15, 
        nome:"Frankenstein",
        autor:"Mary Shelley",
        img: 'src="img-anuncios/frankenstein.png" class="a-anuncio-1""',
        preco: 23.99,
    },
    {
    id: 16, 
        nome:"Guerra do Velho",
        autor:"John Scalzi",
        img: 'src="img-anuncios/guerra do velho.png" class="a-anuncio-1"',
        preco: 48.99,
    },
    {
    id: 17, 
        nome:"A Garota do Lago",
        autor:"Charile Donlea",
        img: 'src="img-anuncios/a garota do lago.png" class="a-anuncio-1"',
        preco: 26.99,
    },
    {
    id: 18, 
        nome:"A Biblioteca da Meia-Noite",
        autor:"Matt Haig",
        img: 'src="img-anuncios/a biblioteca da meia noite.png" class="a-anuncio-1"',
        preco: 34.99,
    },
    {
    id: 19, 
        nome:"Vidas Secas",
        autor:"Graciliano Ramos",
        img: 'src="img-anuncios/vidas secas.png" class="a-anuncio-1"',
        preco: 45.99,
    },
    {
    id: 20, 
        nome:"A Cabana da Solidão",
        autor:"Antonio Demarchi",
        img: 'src="img-anuncios/a cabana da solidao.png" class="a-anuncio-1"',
        preco: 19.99,
    },
    {
    id: 21, 
        nome:"O Poder da Manipulação",
        autor:"Jacob Petry",
        img: 'src="img-anuncios/o poder da manipulação.png" class="a-anuncio-1"',
        preco: 32.99,
    },
]

// conversão de valores para string que não é feita automaticamente pelo local storage

// localStorage.setItem("livro", JSON.stringify(fav));

// const getFav  = localStorage.getItem("livro");

// const favoritosObjeto = JSON.parse(getFav);

// console.log(favoritosObjeto);

// localStorage.clear()

// localStorage.removeItem("");


btn_heart_1.addEventListener("click", function(){
//    localStorage.setItem("livro", JSON.stringify(fav[0]));

//    let getFav  = localStorage.getItem("livro");

//    let favoritosObjeto = JSON.parse(getFav);

    produtosFavoritos.push(fav[0]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
    // console.log(favoritosObjeto)

    // listarLivro();

})
btn_heart_2.addEventListener("click", function(){
    produtosFavoritos.push(fav[1]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));

})
btn_heart_3.addEventListener("click", function(){
    produtosFavoritos.push(fav[2]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_4.addEventListener("click", function(){
    produtosFavoritos.push(fav[3]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_5.addEventListener("click", function(){
    produtosFavoritos.push(fav[4]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_6.addEventListener("click", function(){
    produtosFavoritos.push(fav[5]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_7.addEventListener("click", function(){
    produtosFavoritos.push(fav[6]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_8.addEventListener("click", function(){
    produtosFavoritos.push(fav[7]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_9.addEventListener("click", function(){
    produtosFavoritos.push(fav[8]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_10.addEventListener("click", function(){
    produtosFavoritos.push(fav[9]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_11.addEventListener("click", function(){
    produtosFavoritos.push(fav[10]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_12.addEventListener("click", function(){
    produtosFavoritos.push(fav[11]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_13.addEventListener("click", function(){
    produtosFavoritos.push(fav[12]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_14.addEventListener("click", function(){
    produtosFavoritos.push(fav[13]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_15.addEventListener("click", function(){
    produtosFavoritos.push(fav[14]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_16.addEventListener("click", function(){
    produtosFavoritos.push(fav[15]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_17.addEventListener("click", function(){
    produtosFavoritos.push(fav[16]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_18.addEventListener("click", function(){
    produtosFavoritos.push(fav[17]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_19.addEventListener("click", function(){
    produtosFavoritos.push(fav[18]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_20.addEventListener("click", function(){
    produtosFavoritos.push(fav[19]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})
btn_heart_21.addEventListener("click", function(){
    produtosFavoritos.push(fav[20]);
    localStorage.setItem("livro", JSON.stringify(produtosFavoritos));
})