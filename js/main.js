// navigation button functionalitie
var bar=document.getElementById("bar-icon");
var links=document.querySelector(".nav-links");
var main=document.querySelector("main");


bar.addEventListener("click", function (){
    links.style.display="flex";
    links.classList.toggle("nav-links-open");
    bar.classList.toggle("fa-window-close");
});
main .addEventListener("click", function () {
    links.classList.remove("nav-links-open");
    bar.classList.remove("fa-window-close");
});


var subject="Get in touch email";
var body="Welcome Elena, I would like to be my photographer, contact me please.";
var email=document.getElementById("email");


function sendEmail(){
    window.location.href="mailto:mainAccount@gmail.com?subject="+subject
    +"&body="+body+"&cc="+email.value;
}