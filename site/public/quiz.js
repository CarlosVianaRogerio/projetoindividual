    var resultado_pratica = 0;
    var resultado_estima = 0;
    var resultado_sono = 0;
    var resultado_costa = 0;
    var resultado_estresse = 0;
    var resultado_concentracao = 0;
    var contador_sono = 0;
    var quizPag = 0;

    function voltar(){
    if (quizPag > 0){
    quizPag--
    }
    
    if (quizPag == 0){
        document.getElementById("pagina2").style.display = "none";
        document.getElementById("pagina1").style.display = "flex";
    }
    if (quizPag == 1){
        document.getElementById("pagina3").style.display = "none";
        document.getElementById("pagina2").style.display = "flex";
    }
    if (quizPag == 2){
        document.getElementById("pagina4").style.display = "none";
        document.getElementById("pagina3").style.display = "flex";
    }
    if (quizPag == 3){
        document.getElementById("pagina5").style.display = "none";
        document.getElementById("pagina4").style.display = "flex";
    }
    if (quizPag == 4){
        document.getElementById("pagina6").style.display = "none";
        document.getElementById("pagina5").style.display = "flex";
    }
    if (quizPag == 5){
        document.getElementById("pagina7").style.display = "none";
        document.getElementById("pagina6").style.display = "flex";
    }
}   
    function praticaSim(){
        resultado_pratica = 1
        avancar()
    }
    function praticaNao(){
        resultado_pratica = 'null';
        avancar()
    }
    function estimaSim(){
        resultado_estima = 1
        avancar()
    }
    function estimaNao(){
        resultado_estima = 'null'
        avancar()
    }
    function sonoSim(){
        resultado_sono = 1
        contador_sono++
        avancar()
    }
    function sonoNao(){
        resultado_sono = 'null'
        avancar()
    }
    function costaSim(){
        resultado_costa = 1
        avancar()
    }
    function costaNao(){
        resultado_costa = 'null'
        avancar()
    }
    function estresseSim(){
        resultado_estresse = 1
        avancar()
    }
    function estresseNao(){
        resultado_estresse = 'null'
        avancar()
    }
    function concentracaoSim(){
        resultado_concentracao = 1
        avancar()
    }
    function concentracaoNao(){
        resultado_concentracao = 'null'
        avancar()
    }
    function avancar(){
    if (quizPag < 7){
    quizPag++
    
    }
    if (quizPag == 1){
        document.getElementById("pagina1").style.display = "none";
        document.getElementById("pagina2").style.display = "flex";
    }
    if (quizPag == 2){
        document.getElementById("pagina2").style.display = "none";
        document.getElementById("pagina3").style.display = "flex";
    }
    if (quizPag == 3){
        document.getElementById("pagina3").style.display = "none";
        document.getElementById("pagina4").style.display = "flex";
    }
    if (quizPag == 4){
        document.getElementById("pagina4").style.display = "none";
        document.getElementById("pagina5").style.display = "flex";
    }
    if (quizPag == 5){
        document.getElementById("pagina5").style.display = "none";
        document.getElementById("pagina6").style.display = "flex";
    }
    if (quizPag == 6){
        document.getElementById("pagina6").style.display = "none";
        document.getElementById("pagina7").style.display = "flex";
    }
    if (quizPag == 7){
        document.getElementById("pagina7").style.display = "none";
        document.getElementById("resultsPratica").style.display = "flex";
    }
} 

    function resultado(){
        publicar()
        avancar()
    }

    var resultsPag = 0;



function resultsAvancar(){
    if (resultsPag < 7){
    var teste = 1;
    if (resultsPag == 0 && resultado_sono == 1){
        teste = 0
        resultsPag++
        document.getElementById("resultsPratica").style.display = "none";
        document.getElementById("resultsSono").style.display = "flex";

    }else if (resultsPag == 1 && resultado_costa == 1){
        teste = 0
        resultsPag++
        document.getElementById("resultsPratica").style.display = "none";
        document.getElementById("resultsSono").style.display = "none";
        document.getElementById("resultsCosta").style.display = "flex";

    }else if (resultsPag == 2 && resultado_estresse == 1){
        teste = 0
        resultsPag++
        document.getElementById("resultsPratica").style.display = "none";
        document.getElementById("resultsSono").style.display = "none";
        document.getElementById("resultsCosta").style.display = "none";
        document.getElementById("resultsEstresse").style.display = "flex";
    } 
    else if (resultsPag == 3 && resultado_concentracao == 1){
        teste = 0
        resultsPag++
        document.getElementById("resultsPratica").style.display = "none";
        document.getElementById("resultsSono").style.display = "none";
        document.getElementById("resultsCosta").style.display = "none";
        document.getElementById("resultsEstresse").style.display = "none";
        document.getElementById("resultsConcentracao").style.display = "flex";

    }else if (resultsPag == 4 && resultado_estima == 1){
        teste = 0
        resultsPag++
        document.getElementById("resultsPratica").style.display = "none";
        document.getElementById("resultsSono").style.display = "none";
        document.getElementById("resultsCosta").style.display = "none";
        document.getElementById("resultsEstresse").style.display = "none";
        document.getElementById("resultsConcentracao").style.display = "none";
        document.getElementById("resultsEstima").style.display = "flex";

    }else if (resultsPag == 5){
        teste = 0
        resultsPag++
        document.getElementById("resultsPratica").style.display = "none";
        document.getElementById("resultsSono").style.display = "none";
        document.getElementById("resultsCosta").style.display = "none";
        document.getElementById("resultsEstresse").style.display = "none";
        document.getElementById("resultsConcentracao").style.display = "none";
        document.getElementById("resultsEstima").style.display = "none";
        document.getElementById("resultsLeaderboard").style.display = "flex";
    
    }else if (resultsPag == 6){
        teste = 0
        resultsPag++
        document.getElementById("resultsPratica").style.display = "none";
        document.getElementById("resultsSono").style.display = "none";
        document.getElementById("resultsCosta").style.display = "none";
        document.getElementById("resultsEstresse").style.display = "none";
        document.getElementById("resultsConcentracao").style.display = "none";
        document.getElementById("resultsEstima").style.display = "none";
        document.getElementById("resultsLeaderboard").style.display = "none";
        document.getElementById("resultsReais").style.display = "flex";
    
    }else {
        for (let index = 0; index < teste; index++) {
        resultsPag++     
        resultsAvancar()
        }

    }
    }}
    // if (resultsPag == 6){
    //     document.getElementById("pagina6").style.display = "none";
    //     document.getElementById("pagina7").style.display = "flex";
    // }
    // if (resultsPag == 7){
    //     document.getElementById("pagina7").style.display = "none";
    //     document.getElementById("resultsEstima").style.display = "flex";
    // }

    function publicar() {
        var idUsuario = sessionStorage.ID_USUARIO;

        var corpo = {
            // titulo: form_postagem.titulo.value,
            // descricao: form_postagem.descricao.value,
            pratica: resultado_pratica,
            autoestima: resultado_estima,
            sono: resultado_sono,
            costa: resultado_costa,
            estresse: resultado_estresse,
            concentracao: resultado_concentracao,
            idUsuario: idUsuario
        }

        fetch(`/avisos/publicar/${idUsuario}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(corpo)
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                alert('deu certo');
                
               
            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            
        });

        return false;

    }
    listarQuiz()
    function listarQuiz(){
        
    fetch("/avisos/listarQuiz").then(function (resposta) {
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
                    console.log(publicacao);
                    // valor() 
                    // grafico()
                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
          
        });

    }