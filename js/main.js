function resgatarSalvos(){

    if(localStorage.getItem("livro")){
        return JSON.parse(localStorage.getItem("livro"));
    }else{
        return [];
    }

}

var produtosFavoritos = resgatarSalvos();