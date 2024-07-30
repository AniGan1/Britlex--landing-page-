const navbar = document.getElementById("navbar");
const closebtn = document.querySelector(".closebtn");

let Bool_navbar = false;

navbar.addEventListener('click', function() {
    if(Bool_navbar == true){
        document.getElementById("mySidebar").style.display = "Block";
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "0";
        Bool_navbar = false
    }else{
        document.getElementById("mySidebar").style.display = "None";
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        Bool_navbar = true
    }
})

closebtn.addEventListener('click', function() {
    document.getElementById("mySidebar").style.display = "None";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
})

