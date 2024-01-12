var harry = document.getElementById("harry");
var dobby = document.getElementById("dobby");
function jump(){
    if(harry.classList != "animate"){
        harry.classList.add("animate");
    }
    setTimeout(function(){
        harry.classList.remove("animate");
    },500);
}