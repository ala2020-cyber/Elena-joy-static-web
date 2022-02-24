


var bar=document.getElementById("bar-icon");
var links=document.querySelector(".nav-links");
var main=document.querySelector("main");

bar.addEventListener("click", function (){
    links.style.display="flex";
    links.classList.toggle("nav-links-open");
});
main .addEventListener("click", function () {
    links.classList.remove("nav-links-open")
});