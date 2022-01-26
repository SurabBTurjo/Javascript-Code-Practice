// set inital value to zero
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById("btn")
const color = document.querySelector(".color")


let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
      btn.addEventListener("click",function(){
        let hexcolor='#'
        
        for(let i=0;i<6;i++){
            hexcolor+=hex[getrandomnumber()]
        }
        
        document.body.style.backgroundColor = hexcolor
    });
    function getrandomnumber(){
        return Math.floor(Math.random()*hex.length)
        }
    
    }
    if (count < 0) {
      value.style.color = "red";
      btn.addEventListener("click",function(){
        let hexcolor='#'
        
        for(let i=0;i<6;i++){
            hexcolor+=hex[getrandomnumber()]
        }
        
        document.body.style.backgroundColor = hexcolor
    });
    function getrandomnumber(){
        return Math.floor(Math.random()*hex.length)
        }
    
    }
    if (count === 0) {
      value.style.color = "#222";
      document.body.style.backgroundColor = 'white'
    }
    value.textContent = count;
  });
});
