let eps, tempo, respota;

document.getElementById("botan").onclick = function gettempo(){
   eps = parseFloat(document.getElementById("eps").value); 
   tempo = parseFloat(document.getElementById("hora").value);
   let epsoma = eps * 24 / 60;
   let tempofinal = epsoma + tempo;

   if(tempofinal >= 24){
      tempofinal = tempofinal - 24;
      document.getElementById("resposta").innerHTML = "teste " + tempofinal + "AM";
   }
   else{
      document.getElementById("resposta").innerHTML = "teste " + tempofinal;
   }
}