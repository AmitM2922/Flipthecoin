document.getElementById("btn").addEventListener("click",function(){
    setTimeout(function(){
        var toss=Math.random() *2;
        var integer=Math.floor(toss);
        document.querySelector("#img").setAttribute("src",integer+".png");
        if(integer==0){
            document.getElementById("result").innerHTML="Head";
        }
        else{
            document.getElementById("result").innerHTML="Tail";
        }

    },500)
})