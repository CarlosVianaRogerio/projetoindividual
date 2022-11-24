var favorito = 0;

function imagem1(){
    if(favorito == 2 || favorito == 3){
        var borda = document.getElementById('imagem2').style.border = "solid 2px black"
        var borda = document.getElementById('imagem3').style.border = "solid 2px black"
        }
    var borda = document.getElementById('imagem1').style.border = "solid 5px black"
    favorito = 1
}
function imagem2(){
    if(favorito == 1 || favorito == 3){
        var borda = document.getElementById('imagem1').style.border = "solid 2px black"
        var borda = document.getElementById('imagem3').style.border = "solid 2px black"
        }
    var borda = document.getElementById('imagem2').style.border = "solid 5px black"
    favorito = 2
}
function imagem3(){
    if(favorito == 1 || favorito == 2){
        var borda = document.getElementById('imagem1').style.border = "solid 2px black"
        var borda = document.getElementById('imagem2').style.border = "solid 2px black"
        }
    var borda = document.getElementById('imagem3').style.border = "solid 5px black"
    favorito = 3
}
