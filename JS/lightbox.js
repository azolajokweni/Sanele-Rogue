const gallery=document.querySelectorAll(".gallery img");

const lightbox=document.querySelector(".lightbox");

const image=lightbox.querySelector("img");

gallery.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

image.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});