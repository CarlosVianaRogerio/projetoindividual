    var resultado_pratica = 0;
    var resultado_estima = 0;
    var resultado_sono = 0;
    var resultado_costa = 0;
    var resultado_estressado = 0;
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
        document.getElementById("resultsEstima").style.display = "flex";
    }
} 

    function resultado(){
        avancar()
    }