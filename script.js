function resposta() {
    let nome;
    //recebe texto do html
    nome=document.getElementById("nome").value;
 
    let result;
    result=nome;
 
    document.getElementById("resposta").innerHTML="Bonito nome"+result;
 
 
 }