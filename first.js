let boxes = document.querySelectorAll(".button");
let reset = document.querySelector(".reset");
let text = true;
let winner = document.querySelector(".msg");
let win = document.querySelector(".win");
let newgame = document.querySelector(".newgame");

let arr = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];

boxes.forEach( (box) =>{
   box.addEventListener("click", () =>{
      if(text){
         box.innerText ="O";
         text =false;
      }
      else{
         box.innerText ="X";
         text=true
         box.style.color = "black";
      }
      box.disabled = true;
      checkWinner();
   });
});

const gameend = () =>{
   for(b of boxes ){
      b.disabled = true;
   }
}

const winnershow =(po1)=>{
   winner.classList.remove("hide");
   win.innerText= `congratulation winner is ${po1}`;
   gameend();

}
const checkWinner = () =>{
   for(let a of arr){
let po1= boxes[a[0]].innerText;
let po2= boxes[a[1]].innerText;
let po3= boxes[a[2]].innerText;
if(po1 !="" && po2 !="" && po3 !=""){
if(po1==po2 && po2==po3){
   winnershow(po1);     
   gameend();
}
}
   }
}

newgame.addEventListener(("click" ), ()=>{
   for(b of boxes ){
      b.disabled = false;
      b.innerText="";
   }
   winner.classList.add("hide");
  
});

reset.addEventListener( ("click" ), ()=>{
   for(b of boxes ){
      b.disabled = false;
      b.innerText="";
   }
   winner.classList.remove("hide");

});
