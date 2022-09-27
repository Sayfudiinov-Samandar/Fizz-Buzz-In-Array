var elForm =document.querySelector(".site-form");
var elInput=document.querySelector(".form-input");

var elFizzArr=document.querySelector(".fizz-array");
var elBuzzArr=document.querySelector(".buzz-array");
var elFizzBuzzArr=document.querySelector(".fizzbuzz-array");

var elFizz=document.querySelector(".fizz-soni");
var elBuzz=document.querySelector(".buzz-soni");
var elFizzBuzz=document.querySelector(".fizzbuzz-soni");


var fizzarray=[];
var buzzarray=[];
var fizzbuzzarray=[];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    var inputValue=Number(elInput.value);



    if (inputValue%3==0 && inputValue%5==0) {
        fizzbuzzarray.push(inputValue);
        elFizzBuzzArr.textContent=fizzbuzzarray;
        elFizzBuzz.textContent=`Fizz && Buzz soni ${fizzbuzzSumm++}: ta!`         
    }else if (inputValue%5==0) {
        buzzarray.push(inputValue);
        elBuzzArr.textContent=buzzarray;
        elBuzz.textContent=`Buzz soni ${buzzSumm++}: ta!`        
    }else if (inputValue%3==0) {
        fizzarray.push(inputValue);
        elFizzArr.textContent=fizzarray;
        elFizz.textContent=`Fizz soni ${fizzSumm++}: ta!`
    }
    elInput.value=""
})
var fizzSumm = 1;
var buzzSumm=1;
var fizzbuzzSumm=1;