function mascara_cpf(){
    let cpf = document.getElementById("id_cpf");
    if(cpf.value.length == 3 || cpf.value.length ==7){
        cpf.value +=".";
    }
    else if(cpf.value.length == 11){
        cpf.value += "-";
    }
}
function mascara_tel(){
    let tel = document.getElementById("id_tel");
    if(tel.value.length == 2){
        tel.value = "(" + tel.value + ") ";
    }
    else if(tel.value.length ==10){
        tel.value += "-";
    }
}
