const a = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];
const b = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const c = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let d = a.concat(b);
let characters = d.concat(c);

//varaibles
let passwordGenerator = document.getElementById('Generate-El');
let firstResult = document.getElementById('result-one');
let secondResult = document.getElementById('result-tow');

let passwordLengthDispaly = document.getElementById('length-El');
let symbolsBtn = document.getElementById('symbols-btn');
let numbersBtn = document.getElementById('numbers-btn');

let passwordLength = 15;
let rangeControlerFrom;
let rangeControlerTo;
let randIndexOne;
let randIndexTow;
let symbolsChoix = true;
let numbersChoix = true;

function flipSymbolsBtn(){

    if(symbolsBtn.textContent === 'ON'){
        symbolsBtn.textContent = 'OFF';
        symbolsChoix=false;
    }else{
        symbolsBtn.textContent = 'ON';
        symbolsChoix=true;
    }
    checkRange();
}
function flipNumbersBtn(){
    if(numbersBtn.textContent === 'ON'){
        numbersBtn.textContent = 'OFF';
        numbersChoix=false;
    }else{
        numbersBtn.textContent = 'ON';
        numbersChoix=true;
    }
    checkRange();
}
function checkRange(){
    reCombinesCharacters();
   if(symbolsChoix === false && numbersChoix === false){//no symbols and no numbers
        rangeControlerFrom = 0;
        rangeControlerTo = a.length;
   }else if(symbolsChoix === true && numbersChoix === true){//want symbols and numbers
        rangeControlerFrom = 0;
        rangeControlerTo = characters.length;
   }else if(symbolsChoix === false && numbersChoix === true){//want numbers but no symbols
        rangeControlerFrom = 0;
        rangeControlerTo = a.concat(b).length;
   }else{//want symbols and no numbers
        characters = a.concat(c);
        rangeControlerFrom = 0;
        rangeControlerTo = characters.length;
   }
}
function removeFromLength(){
    if(passwordLength > 6){
        passwordLength--;
        displayPasswordLength();
    }
}
function addToLength(){
    if(passwordLength < 15){
        passwordLength++;
        displayPasswordLength();
    }
}
function displayPasswordLength(){
    passwordLengthDispaly.textContent = passwordLength;
}
function generatePassword(){
    checkRange();
    resetPasswordToEmpty();
    for( let i=0 ; i< passwordLength ; i++){
        //first_password
        randIndexOne = Math.floor(Math.random() * rangeControlerTo  ) + rangeControlerFrom ;
        firstResult.textContent += characters[randIndexOne];
        //seconde_password
        randIndexTow = Math.floor(Math.random() * rangeControlerTo  ) + rangeControlerFrom ;
        secondResult.textContent += characters[randIndexTow];
    }
}
function resetPasswordToEmpty(){
    firstResult.textContent='';
    secondResult.textContent='';
}
function reCombinesCharacters(){
    d = a.concat(b);
    characters = d.concat(c);// a + b + c
}
