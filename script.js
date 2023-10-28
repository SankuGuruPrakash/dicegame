function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
var num1=generateRandomNumber();
var randomImage='dice'+num1+'.png';
var image1=document.querySelectorAll('img')[0];
image1.setAttribute('src',randomImage);

var num2=generateRandomNumber();
var randomImage2='dice'+num2+'.png';
document.querySelectorAll('img')[1].setAttribute('src',randomImage2);

if(num1>num2){
  document.querySelector('h1').innerHTML='player1wins';
}
else if(num2>num1){
  document.querySelector('h1').innerHTML='player2wins';
  
}
else{
  document.querySelector('h1').innerHTML='draw';
  }
