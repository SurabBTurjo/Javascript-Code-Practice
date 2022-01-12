const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
<<<<<<< HEAD

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click",function(){
    let hexcolor='#'
    
    for(let i=0;i<6;i++){
        hexcolor+=hex[getrandomnumber()]
    }
    
    color.textContent=hexcolor
    document.body.style.backgroundColor = hexcolor
});
function getrandomnumber(){
    return Math.floor(Math.random()*hex.length)
    }
=======
>>>>>>> dce6457020a191d64469bfb0189ba63d4cbb0426
