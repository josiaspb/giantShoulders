

//let random1 = Math.floor(Math.random() * 7);
//let random2 = Math.floor(Math.random() * 7);

let refresh = document.querySelector(".container");

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

refresh.addEventListener("click", ()=>{

    img1.src=`./images/dice${Math.ceil(Math.random() * 6)}.png`
    img2.src=`./images/dice${Math.ceil(Math.random() * 6)}.png`
})
