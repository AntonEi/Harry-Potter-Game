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

var checkDead = setInterval(function () {
    var harryTop = parseInt(window.getComputedStyle(harry).getPropertyValue("top"));
    var dobbyLeft = parseInt(window.getComputedStyle(dobby).getPropertyValue("left"));

    
    if (dobbyLeft < 45 && dobbyLeft > 0 && harryTop >= 50 && harryTop <= 150) {
        dobby.style.animation = "none";
        dobby.style.display = "none";
        alert("You lose.");
        clearInterval(checkDead); 
    }
}, 10);