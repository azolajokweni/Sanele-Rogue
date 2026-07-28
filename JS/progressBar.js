const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop = window.scrollY;

const height =

document.documentElement.scrollHeight -

window.innerHeight;

const percent =

(scrollTop/height)*100;

progress.style.width = percent+"%";

});