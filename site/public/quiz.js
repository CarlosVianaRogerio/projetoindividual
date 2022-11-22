    var resultado_pratica = 0;
    var resultado_estima = 0;
    var resultado_sono = 0;
    var resultado_costa = 0;
    var resultado_estresse = 0;
    var resultado_concentracao = 0;
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
        resultado_pratica ='sim'
        avancar()
    }
    function praticaNao(){
        resultado_pratica ='nao'
        avancar()
    }
    function estimaSim(){
        resultado_estima ='sim'
        avancar()
    }
    function estimaNao(){
        resultado_estima ='nao'
        avancar()
    }
    function sonoSim(){
        resultado_sono ='sim'
        avancar()
    }
    function sonoNao(){
        resultado_sono ='nao'
        avancar()
    }
    function costaSim(){
        resultado_costa ='sim'
        avancar()
    }
    function costaNao(){
        resultado_costa ='nao'
        avancar()
    }
    function estresseSim(){
        resultado_estresse ='sim'
        avancar()
    }
    function estresseNao(){
        resultado_estresse ='nao'
        avancar()
    }
    function concentracaoSim(){
        resultado_concentracao ='sim'
        avancar()
    }
    function concentracaoNao(){
        resultado_concentracao ='nao'
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
        avancar()
    }

    var resultsPag = 0;

    // function resultsVoltar(){
    // if (resultsPag > 0){
    // resultsPag--
    // }
    
    // if (resultsPag == 0){
    //     document.getElementById("resultsSono").style.display = "none";
    //     document.getElementById("resultsPratica").style.display = "flex";
    // }
    // if (resultsPag == 1){
    //     document.getElementById("resultsCosta").style.display = "none";
    //     document.getElementById("resultsSono").style.display = "flex";
    // }
    // if (resultsPag == 2){
    //     document.getElementById("resultsEstresse").style.display = "none";
    //     document.getElementById("resultsCosta").style.display = "flex";
    // }
    // if (resultsPag == 3){
    //     document.getElementById("resultsConcentracao").style.display = "none";
    //     document.getElementById("resultsEstresse").style.display = "flex";
    // }
    // if (resultsPag == 4){
    //     document.getElementById("resultsEstima").style.display = "none";
    //     document.getElementById("resultsConcentracao").style.display = "flex";
    // }


function resultsAvancar(){
    if (resultsPag < 7){
    var teste = 1;
    if (resultsPag == 0 && resultado_sono == 'sim'){
        teste = 0
        resultsPag++
        document.getElementById("resultsPratica").style.display = "none";
        document.getElementById("resultsSono").style.display = "flex";

    }else if (resultsPag == 1 && resultado_costa == 'sim'){
        teste = 0
        resultsPag++
        document.getElementById("resultsPratica").style.display = "none";
        document.getElementById("resultsSono").style.display = "none";
        document.getElementById("resultsCosta").style.display = "flex";

    }else if (resultsPag == 2 && resultado_estresse == 'sim'){
        teste = 0
        resultsPag++
        document.getElementById("resultsPratica").style.display = "none";
        document.getElementById("resultsSono").style.display = "none";
        document.getElementById("resultsCosta").style.display = "none";
        document.getElementById("resultsEstresse").style.display = "flex";
    } 
    else if (resultsPag == 3 && resultado_concentracao == 'sim'){
        teste = 0
        resultsPag++
        document.getElementById("resultsPratica").style.display = "none";
        document.getElementById("resultsSono").style.display = "none";
        document.getElementById("resultsCosta").style.display = "none";
        document.getElementById("resultsEstresse").style.display = "none";
        document.getElementById("resultsConcentracao").style.display = "flex";

    }else if (resultsPag == 4 && resultado_estima == 'sim'){
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
