document.getElementById("submitQuiz").onclick = 
function(){
   
    var q1 = document.getElementsByName("q1");
    var q2 = document.getElementsByName("q2");
    var q3ans = document.getElementById("q3a");

    var score = 0;

    if(q1[0].checked == true){
        score = score+1;
    }
    if(q2[0].checked && q2[1].checked && (q2[2].checked==false && q2[3].checked==false) ){
        score = score + 1;
    }

    if(q3ans.value == "Hello World"){
        score = score + 1;
    }

    document.getElementById("score").textContent = `Score : ${score}`;
    
}
