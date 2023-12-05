let q1;
let q2;
let anime = 24;
let answer;
let tanswer;
let a =

document.getElementById("submit").onclick = function(){
   q2 = document.getElementById("q1").value;
   q2 = Number(q2);
   answer = Math.round(q2 * anime / 60);
   
   if(tanswer > 24){

   q1 = document.getElementById("time").value;
   q1 = Number(q1);
   let qa = q1 - 24;
   Math.round(tanswer) = qa + answer;}
   else{
      q1 = document.getElementById("time").value;
      q1 = Number(q1);
      tanswer = q1 + answer;
   }
   document.getElementById("answer").innerHTML = "This about " + answer + "H";
   document.getElementById("tanswer").innerHTML = "You will finish on " + tanswer + "AM";
}

