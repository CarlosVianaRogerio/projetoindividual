var favorito = 0;
var salvo = 0;

function imagem1(){
    var teste = true;
    if(salvo > 0){
        alert('Você já salvou um beneficio')
        teste = false;
}   else if(favorito == 2 || favorito == 3){
        var borda = document.getElementById('imagem2').style.border = "solid 2px black"
        var borda = document.getElementById('imagem3').style.border = "solid 2px black"
        }
    if (teste){var borda = document.getElementById('imagem1').style.border = "solid 5px black"
    favorito = 1}
}
function imagem2(){
    var teste = true;
    if(salvo > 0){
        alert('Você já salvou um beneficio')
    teste = false;
}   else if(favorito == 1 || favorito == 3){
        var borda = document.getElementById('imagem1').style.border = "solid 2px black"
        var borda = document.getElementById('imagem3').style.border = "solid 2px black"
        }
    if (teste){var borda = document.getElementById('imagem2').style.border = "solid 5px black"
    favorito = 2}
}
function imagem3(){
    var teste = true;
    if(salvo > 0){
        alert('Você já salvou um beneficio')
        teste = false;
}   else if(favorito == 1 || favorito == 2){
        var borda = document.getElementById('imagem1').style.border = "solid 2px black"
        var borda = document.getElementById('imagem2').style.border = "solid 2px black"
        }
    if (teste){var borda = document.getElementById('imagem3').style.border = "solid 5px black"
    favorito = 3}
}

function salvar(){
    var teste = true;
    if(favorito == 0){
        teste = false;
        alert('Escolha algum beneficio');

}   if(salvo > 0){
    alert('Você já salvou um beneficio')
    teste = false;
}
    if(teste){
    salvo++







    }
}










function graficos(){
    var mostrar = document.getElementById('grafico').style.display='block'
}
