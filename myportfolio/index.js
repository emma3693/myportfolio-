const hamburgar =document.querySelector(".hamburgar");
const navMenu = document.querySelector(".nav_menu");

hamburgar.addEventListener("click", () =>{
    hamburgar.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_links").forEach(n => n.
    addEventListener("click", () =>{
    hamburgar.classList.remove("active");
    navMenu.classList.remove("active");
    
}))

//date format
var d = new Date();
document.getElementById("date").innerHTML = d

let year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;
