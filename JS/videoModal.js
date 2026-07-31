const cards = document.querySelectorAll(".video-card");

const modal = document.querySelector(".video-modal");

const player = document.getElementById("youtubePlayer");

const closeBtn = document.querySelector(".close-video");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        player.src = card.dataset.video;

        modal.classList.add("active");

        document.body.style.overflow="hidden";

    });

});

closeBtn.addEventListener("click",()=>{

    modal.classList.remove("active");

    player.src="";

    document.body.style.overflow="auto";

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

        player.src="";

        document.body.style.overflow="auto";

    }

});
