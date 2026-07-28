const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background = "rgba(10,10,10,.95)";
        navbar.style.padding = "15px 8%";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    }

    else{

        navbar.style.background = "transparent";
        navbar.style.padding = "20px 8%";
        navbar.style.boxShadow = "none";

    }

});