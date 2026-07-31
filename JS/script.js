import "./navbar.js";
import "./mobileMenu.js";
import "./progressBar.js";
import "./reveal.js";
import "./counter.js";
import "./lightbox.js";
import "./backToTop.js";
import "./videoModal.js";

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

if(window.scrollY>=section.offsetTop-150){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.href.includes(current))

link.classList.add("active");

});

});

const glow=document.querySelector(".cursor-glow");

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

document.querySelectorAll(".lazy")

.forEach(img=>{

img.onload=()=>{

img.classList.add("loaded");

};

});
