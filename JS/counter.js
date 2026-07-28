const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=target/200;

if(current<target){

counter.innerText=Math.ceil(current+increment);

requestAnimationFrame(update);

}

else{

counter.innerText=target.toLocaleString()+"+";

}

};

update();

});