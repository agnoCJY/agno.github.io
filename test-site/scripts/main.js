// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

//alert('Hello!');

// function multiply(num1,num2){
//   var result = num1 * num2;
//   return result
// }

//multiply(4,7);

// document.querySelector('html').onclick = function(){
//   alert('Ouch! Stop poking me!');
// }

var myImage = document.querySelector('img');

myImage.onclick = function(){
  var myScr = myImage.getAttribute('src');
  if(myScr === 'images/R0001387.jpg'){
    myImage. setAttribute('src','images/R0001361.jpg');
  }else{
    myImage.setAttribute('src','images/R0001387.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name',myName);
  myHeading.innerHTML = 'Nice to see u,' + myName;
}

if(!localStorage.getItem('name')){
  setUserName();
}else{
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Nice to see u again,' + storedName;
}

myButton.onclick = function(){
  setUserName();
}
