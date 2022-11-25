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

function editar(){
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

        fetch(`/avisos/editar/${sessionStorage.getItem("ID_USUARIO")}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                descricao: favorito
            })
        }).then(function (resposta) {

            if (resposta.ok) {
                alert('deu certo')
            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }}

    listar()
var valores = 0;
function listar(){
    fetch("/avisos/listar").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                
                alert('Vazio')
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                
                valores = [];
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i]; 

                      
                      valores.push(resposta[i].contagem);
                }
                    alert(valores)
                    valor() 
                    grafico()
                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
          
        });
    }
    









function graficos(){
    var mostrar = document.getElementById('grafico').style.display='block'
}
var saude = 0;
var autoestima = 0;
var disposicao = 0;



function valor(){

    for (let index = 0; index < 3; index++) {
        saude = valores[0];
        autoestima = valores[1];
        disposicao = valores[2];
    }

alert('alala' + saude)
}
