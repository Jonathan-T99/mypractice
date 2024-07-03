let identity=document.getElementById('myP');
let identit=document.getElementById('myD');
identity.textContent=`IN GOD, I TRUST`
identit.textContent=`Jonathan is going to church to praise GOD to day 'sunday' on 12 May 2024' at 10h30.`

let x;
let y;
x=10; y=12;
console.log(`The answer of x plus y is: ${x} + ${y}= ${x+y}`)

let userName;
const change=document.getElementById("myB");
const text=document.getElementById("text");
const docu=document.getElementById("para");
change.addEventListener("click",function(){
    userName=text.value;
    console.log(`my name is ${userName}`)
docu.textContent=`My website is ${userName}`

})

const increaseJ=document.getElementById("increase");
const decreaseJ=document.getElementById("decrease");
const resetJ=document.getElementById("reset");
const labelJ=document.getElementById("label");
let count=0;

increaseJ.onclick=function(){
    count++;
    labelJ.textContent=count;
}
decreaseJ.onclick=function(){
    count--;
    labelJ.textContent=count;
}
resetJ.onclick=function(){
    count=0;
    labelJ.textContent=count;
}
const dic1=document.getElementById("dice1");
const dic2=document.getElementById("dice2");
const dic3=document.getElementById("dice3");
const button=document.getElementById("three");
const buttonC=document.getElementById("thre");

let dice1;
let dice2;
let dice3;
let clear =0;
const min =1;
const max =6;
button.onclick=function(){
    dice1=Math.floor(Math.random() * max) + min;
    dice2=Math.floor(Math.random() * max) + min;
    dice3=Math.floor(Math.random() * max) + min;
    dic1.textContent=dice1;
    dic2.textContent=dice2;
    dic3.textContent=dice3;
}
buttonC.onclick=function(){
    dic1.textContent=clear;
    dic2.textContent=clear;
    dic3.textContent=clear;
}

const ageTest=document.getElementById("texte");
const buttonD=document.getElementById("testAge");
const result=document.getElementById("result");
let age;

buttonD.onclick=function(){
    age=ageTest.value;
   let personOld=Number(age);
if(personOld>=45){
    result.textContent='you are too old to play this game';
}
else if(personOld>=18){
    result.textContent='you are old to play this game';
}
else if(personOld<=0){
    result.textContent='This age not exist'
}
else if(personOld<18){
    result.textContent='you are still young'
}
else{
    result.textContent='Text are not allowed'
}
}

const checkBoxJ=document.getElementById("checkBox");
const visaJ=document.getElementById("visa");
const masterCardJ=document.getElementById("masterCard");
const paypalJ=document.getElementById("paypal");
const checkJ=document.getElementById("check");
const subscribeResultJ=document.getElementById("subscribeResult");
const paymentMethodJ=document.getElementById("paymentMethod");

checkJ.addEventListener('click',function(){
    if(checkBoxJ.checked){
        subscribeResultJ.textContent=`you are subscribed`;
        console.log(subscribeResultJ.textContent)
    }
    else{subscribeResultJ.textContent=`you are not subscribed`;
    console.log(subscribeResultJ.textContent)
    }

    if(visaJ.checked){
        paymentMethodJ.textContent='you are paid with Visa';
    }
    else if(masterCardJ.checked){
        paymentMethodJ.textContent='you are paid with masterCard';
    }
    else if(paypalJ.checked){
        paymentMethodJ.textContent='you are paid with paypal';
    }
    else{
        paymentMethodJ.textContent='you are must select payment type';
    }
}) 

/*let loggedIn=false;
let userNamee;
let passWord;

while(!loggedIn){
    email=window.prompt('Enter your Email');
    userNamee=window.prompt('Enter your username');
    passWord=window.prompt('Enter your password');
    
    if(userNamee==="Jonathan" && passWord==="Jonathan"){
        loggedIn=true;
        console.log('you are logged in');
        console.log(`Hello ${userNamee},you're welcome`)
    }else{console.log('invalid credentials, please try again');}
}*/
let testScore=80;
let passGrade;
switch(true){
    case testScore>=90:
        passGrade='A';
        break;
    case testScore>=80:
        passGrade='B';
        break;
    case testScore>=70:
        passGrade='C';
        break;
    case testScore>=60:
        passGrade='D';
        break;
    case passGrade>=50:
        passGrade='D';
        break;
    default:
        passGrade='F';
}   

console.log(`you pass with grade: ${passGrade}`);
document.write(`you pass with grade: ${passGrade}`);

let myName='jonathan ';
let myEmail='jonathantwizere@gmail.com';
let display;
let user;
display=myName.trim().charAt(0).toUpperCase() + myName.trim().toUpperCase().slice(1,myName.indexOf(" ")) +" "+ myEmail.trim().toUpperCase().slice(8,myEmail.indexOf("@"));
user=myEmail.slice(8,myEmail.indexOf("@")).toUpperCase();
console.log(display);
console.log(`Hello ${user}, you're welcome.`);

//number Guess game
/*let minNum=5;
let maxNum=100;
const answer = Math.floor(Math.random() + (maxNum + 2)) + min;

let attempts=0;
let guess;
let running=true;

while(running){
    guess=console.log(`Guess a number between ${minNum} - ${maxNum}`);
    gNum=Number(guess);

    if(isNaN(guess)){
        console.log('please text is not allowed');
    }else if(guess< minNum || guess> maxNum){
        console.log('please enter valid number');
    }else{
        attempts++;
        if(guess< answer){
            console.log('number is low! try again!');
        }else if(guess>answer){
            console.log('number is high! try again!');
        }else{console.log(`correct! the answer was ${answer}.congulatulations!!`);
    running=false;}
    }
}*/

let guessInput=document.getElementById("guessInput");
const UserGuessedNumber=document.getElementById("UserGuessedNumber");
const computerChoiceNumber=document.getElementById("computerChoiceNumber");
const buttonGuess=document.getElementById("buttonGuess");
const numberOfAttempts=document.getElementById("numberOfAttempts");
let minNum=5;
let maxNum=100;

let computerChoice;
let attempts=1;
let guess;

buttonGuess.onclick=function(){
    computerChoice= Math.floor(Math.random()*(maxNum + 1)) + min;
    
        guess=Number(guessInput);
        guess=guessInput.value;

        if(isNaN(guess)){
            UserGuessedNumber.textContent=`guessing text not allowed!`;
        }else if(guess==""){
            UserGuessedNumber.textContent=`you didn't guess, please guess a number!`
            computerChoice=0;

        }else if(guess<minNum || guess>maxNum){
            UserGuessedNumber.textContent=`please guess number between ${minNum} and ${maxNum}`
        }else{
            numberOfAttempts.textContent=attempts++;
            if(guess<computerChoice){
                UserGuessedNumber.textContent=`your guessed number '${guess}' is too low!try again`;
            }else if(guess>computerChoice){
                UserGuessedNumber.textContent=`your guessed number '${guess}' is too high!try again`;
            }else{UserGuessedNumber.textContent=`Congulatulations! you guessed right number!`}
        }
    
    computerChoiceNumber.textContent=computerChoice;
}

for(i=1; i<=10; i++){
    if(i==4 ||i==7){
        continue;
    }else{console.log(i,'Hello');}
}
/*let player1=document.getElementById("player1");
let player2=document.getElementById("player2");
let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
let button11=document.getElementById("button11");
let button22=document.getElementById("button22");
let btnTwoPlayer=document.getElementById("btnTwoPlayer");

let minNumber=6;
let maxNumber=99;

let num;
let numb;
let attempt=1;


while(button11 || button22){
    num=Number(input1);
    num=text.value;
    numb=Number(input2);
    numb=text.value;
    if(isNaN(num||numb)){
        player1.textContent=`please enter a number`;
        player2.textContent=`please enter a number`;
    }else if(num<minNumber || numb<minNumber ||num>maxNumber||numb>maxNumber){
        player1.textContent=`please enter a number btn ${minNumber} and ${maxNumber}`;
        player2.textContent=`please enter a number btn ${minNumber} and ${maxNumber}`;
    }else{
        attempt++;
        if(player1 !== player2){
            player1.textContent=`please try again!`;
            player2.textContent=`please try again!`;
        }else if(player1 === player2){
            player1.textContent=player2.textContent=`Congulatulations`;
            
        }else{
            player1.textContent=num;
            player2.textContent=numb;
        }
        btnTwoPlayer.textContent=attempt++;
    }
break;

}*/

const textBox=document.getElementById("textBox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelcius=document.getElementById("toCelcius");
const resulte=document.getElementById("resulte");
//const convert=document.getElementById("convert");


function convert(){

    if(toFahrenheit.checked){
       let temp=Number(textBox.value);
        temp=temp*9/5 + 32;
        resulte.textContent=temp.toFixed(1) + "oF";

    }else if(toCelcius.checked){
      let temp=Number(textBox.value);
        temp=(temp-32)*(5/9);
        resulte.textContent=temp.toFixed(1) + "oC";
       

    }else{resulte.textContent="select a unit";}
}
let loggedIn=false;
let email;
let userNamee;
let passWord;

/*while(!loggedIn){
    email=window.prompt('Enter your Email');
    userNamee=window.prompt('Enter your username');
    passWord=window.prompt('Enter your password');
    
    if(userNamee==="Jonathan" && passWord==="Jonathan" && email==="jonathantwizere@gmail.com"){
        loggedIn=true;
        console.log('you are logged in');
        console.log(`Hello ${userNamee},you're welcome`)
    }else{console.log('invalid credentials, please try again');}
}*/
let emailInput=document.getElementById(`EmailInput`);
let usernameInput=document.getElementById(`usernameInput`);
let passwordInput=document.getElementById(`passwordInput`);
const signIn=document.getElementById(`signIn`);
const signUp=document.getElementById(`signUp`);

/*class Form{
    constructor(emailInput,usernameInput,passwordInput,signIn,signUp){
        this.emailInput=emailInput;
        this.usernameInput=usernameInput;
        this.passwordInput=passwordInput;
        this.signIn=signIn;
        this.signUp=signUp;
    }

    set emailInput(newEmail){
        if(newEmail.includes("@") && newEmail.length>4){
            this._emailInput=newEmail;
            return true;
        }else{console.error("write eligible email")}
    }

    set usernameInput
}*/

let consol=getAverage(75,100,85,80,60);//rest parameters=(...rest)allow a function
function getAverage(...numbers){      //work with a variable number of arguments 
    let result=0;                     //by bundling them into an array
    for(let number of numbers){//spread=expands an array into separate elements
        result+=number;        //rest=bundles separate elements into an array
    }
    return result/numbers.length;
}
console.log(consol);

const fullUname=combineStr("Jon","ath","an")
 function combineStr(...strings){
    return strings.join("");
 }
console.log(fullUname);


//dice rolling program
function rollingDice(){
    const diceRollNumber=document.getElementById("diceRollNumber").value;
    const diceImages=document.getElementById("diceImages");
    const diceResult=document.getElementById("diceResult");
    const values=[];
    const images=[];

    for(i=0; i<diceRollNumber; i++){
        const value=Math.floor(Math.random()* 6 )+1;
        values.push(value);
        images.push(`<img src="Dice_image/${value}.png">`);
    }
    console.log(values);
    diceResult.textContent=`${values.join(', ')}`;
    diceImages.innerHTML=images.join('');
}

//random password generator

function passWordGenerating(long,lowerCase,upperCase,includeNumber,includeSymbols){
    const lowerCaseCharacters="abcdefghijklmnopqrstuvwxyz";
    const upperCaseCharacters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const includeNumberCharacters="0123456789";
    const includeSymbolsCharacters="!@#$%^&*()_+=-/?<>;,";

    let allowedCharacters="";
    let passWord="";

    allowedCharacters += lowerCase? lowerCaseCharacters : "";
    allowedCharacters += upperCase? upperCaseCharacters : "";
    allowedCharacters += includeNumber? includeNumberCharacters : "";
    allowedCharacters += includeSymbols? includeSymbolsCharacters : "";

    if(long<=0){
        return `you must enter atleast one positive character!`;
    }
    if(allowedCharacters.length===0){
        return `you must enter atleast one character!`;
    }

    for( let i=0; i<long; i++){
        const randomChoosenIndex= Math.floor(Math.random()* allowedCharacters.length);
        passWord+=allowedCharacters[randomChoosenIndex];
    }
    return passWord;
};

const passwordLong=8;
const lowerCase=true; 
const upperCase=true;
const includeNumber=true;
const includeSymbols=true;

const password=passWordGenerating(passwordLong,lowerCase,upperCase,includeNumber,includeSymbols);

console.log(`Password Generated: ${password}`);

const honore=document.getElementById("Honore");
honore.textContent="Honore visited me at campus due to my presentation on 5May2024"
