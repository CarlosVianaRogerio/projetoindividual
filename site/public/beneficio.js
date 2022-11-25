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

function salvar(){
    if(favorito == 0){
        alert('Escolha algum beneficio')
    }else{
        function cadastrar() {
            aguardar();
    
            //Recupere o valor da nova input pelo nome do id
            // Agora vá para o método fetch logo abaixo
            var nomeVar = nome_input.value;
    
            if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "" || senhaVar != confirmacaoSenhaVar) {
                alert('Preencha todos os campos')
    
                finalizarAguardar();
                return false;
    
            }
            else {
                setInterval(sumirMensagem, 5000)
                var irLogin = document.querySelector('#login')
                        irLogin.href = 'login.html'
            }
    
            // Enviando o valor da nova input
            fetch("/usuarios/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/usuario.js
                    nomeServer: nomeVar,
                    emailServer: emailVar,
                    senhaServer: senhaVar
                })
            }).then(function (resposta) {
    
                console.log("resposta: ", resposta);
    
                if (resposta.ok) {
                    cardErro.style.display = "block";
    
                    alert ("Cadastro realizado com sucesso! Redirecionando para tela de Login...");
                    
                   
                    setTimeout(() => {
                        // window.location = "login.html";
                    }, "2000")
                    
                    limparFormulario();
                    finalizarAguardar();
                } else {
                    throw ("Houve um erro ao tentar realizar o cadastro!");
                }
            }).catch(function (resposta) {
                // console.log(`#ERRO: ${resposta}`);
                finalizarAguardar();
            });
    
            return false;
        }
    
        function sumirMensagem() {
            // cardErro.style.display = "none"
        }
    }
}










function graficos(){
    var mostrar = document.getElementById('grafico').style.display='block'
}
