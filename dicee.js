var d1="images/dice1.png";
var d2="images/dice2.png";
var d3="images/dice3.png";
var d4="images/dice4.png";
var d5="images/dice5.png";
var d6="images/dice6.png";
 var arr=[d1,d2,d3,d4,d5,d6];
 
 var randoms1=arr[Math.floor(Math.random()*arr.length)];

 var randoms2=arr[Math.floor(Math.random()*arr.length)];

document.querySelector(".img1").src=randoms1;
document.querySelector(".img2").src=randoms2;

//  function change(){
//  var randomsrc =arr[Math.floor(Math.random()*arr.length)];
//  img1=randomsrc;
// img2=randomsrc;
//  }

//  document.querySelector("h1").onclick=change;

 if(randoms1===randoms2){
     document.querySelector("h1").textContent="Draw";
 }
 else{
    //  for(var i=0;i<arr.length; i++){
    //     if()
    //  }
   var a=arr.indexOf(randoms1);
   var b=arr.indexOf(randoms2);
   if(a>b){
       document.querySelector("h1").textContent="Player 1 wins"
   }
   else{
    document.querySelector("h1").textContent="player 2 wins"
   }
 }
