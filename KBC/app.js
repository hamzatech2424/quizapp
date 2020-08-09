
const ran = Math.floor(Math.random()*10);

 console.log(ran);


// var ran = radd();


// //random numbers but no repetation;
// function getRandomNumber(min,max){
//   var step1 = max - min + 1;
//   var step2 = Math.random() * step1;
//   var result = Math.floor(step2) + min;
//   return result;
// }

// function createArrayOfNumbers(start,end){
//   var myArray = [];
//   for(var l = start; l <= end; l++){
//     myArray.push(l);
//   }
//   return myArray;
// }

// var numbersArray = createArrayOfNumbers(1,10);

// function radd(){
//   var randomIndex = getRandomNumber(0,numbersArray.length-1);
//   var randomNumber = numbersArray[randomIndex];
//   numbersArray.splice(randomIndex,1);
//   return randomNumber;
// }


//Array 
var quiz = [

    {
        question : "Which is the Capital city of Pakistan?",
        answer : {A: "Lahore",B: "Islamabad",C: "Peshawar",D: "Karachi"},
        correct : "Islamabad"
    },

    {
        question : "When did Bangladesh split from Pakistan?",
        answer : {A: "1971",B: "1979",C: "1972",D: "1996"},
        correct : "1971"
    },

    {
        question : "When Which country does not border Pakistan?",
        answer : {A: "China",B: "Nepal",C: "Afghanistan",D: "Iran"},
        correct : "Nepal"
    },

    {
        question : "Where is K2?",
        answer : {A: "Tian Shan",B: "Hindu Kush",C: "Karakorum",D: "Pamir"},
        correct : "Karakorum"
    },

    {
        question : "What are the official language(s) of Pakistan??",
        answer : {A: "English",B: "Urdu" ,C: "Pashto,",D: "Arabic,Punjabi"},
        correct : "Urdu"
    },

    {
        question : "What is Pakistan’s national sport?",
        answer : {A: "Golf",B: "Hockey",C: "Cricket",D: "Football"},
        correct : "Hockey"
    },

    {
        question : " What is Pakistan’s population?",
        answer : {A: "190 million",B: "143 million",C: "230 million",D: "220 million"},
        correct : "143 million"
    },

    {
        question : "Where is Pakistan located?",
        answer : {A: "Asia",B: "Europe",C: "Middle East",D: "Africa"},
        correct : "Asia"
    },

    {
        question : "What does the name Pakistan mean?",
        answer : {A: "Land of the nomads",B: "Land of the traders", C: "Land of the kings",D: "Land of the pure"},
        correct : "Land of the pure"
    },

    {
        question : "What percent of Pakistan’s population is literate?",
        answer : {A: "92",B: "11",C: "33",D: "55"},
        correct : "55"
    }

    ];


function start(){

    var a = document.querySelector(".startScreen");
    a.classList.add("hide");
    
    var count;

    var gameScreen = document.querySelector(".gameScreen");
    
    var min = 0;
    var interval = setInterval(timer,1000);
    
   
function timer(){
  min++;
  document.getElementById("tim").innerHTML = "Time: " +  min;

  if(min === 20){
    alert("Your Time is up");
    clearInterval(interval);
    document.location.reload();
  }
}

var score = 0;

function scradd(){
  score = score + 5;
  console.log(score);
}


    //Score Div
    var b = document.createElement("div");
    b.classList.add("score");
    var b1 = document.createElement("p");
    b1.setAttribute("id", "p1");
    b1.innerHTML = "Score: " + scradd();
    b.appendChild(b1);
    gameScreen.appendChild(b);

    //Time Div

    var c = document.createElement("div");
    c.classList.add("time");
    var c1 = document.createElement("p");
    // var txt = document.createTextNode("timer()")
    c1.setAttribute("id","tim");
    // c1.innerHTML = "Time: "+ timer();
    c.appendChild(c1);
    gameScreen.appendChild(c);


    //Question div
    var d = document.createElement("div");
    d.classList.add("question");
    var d1 = document.createElement("p");
    d1.setAttribute("id","ques");
    d1.innerHTML = quiz[ran].question;
    d.appendChild(d1);
    gameScreen.appendChild(d);

    //Option1
    var op1 = document.createElement("div");
    op1.classList.add("op1");
    var e1 = document.createElement("p");
    e1.setAttribute("id","op1id");
    e1.innerHTML = quiz[ran].answer.A;
    op1.setAttribute("onclick","addValA()");
    op1.appendChild(e1);
    gameScreen.appendChild(op1);


    var op2 = document.createElement("div");
    op2.classList.add("op2");
    var f1 = document.createElement("p");
    f1.setAttribute("id","op2id");
    f1.innerHTML = quiz[ran].answer.B;
    op2.setAttribute("onclick","addValB()");
    op2.appendChild(f1);
    gameScreen.appendChild(op2);

    var op3 = document.createElement("div");
    op3.classList.add("op3");
    var g1 = document.createElement("p");
    g1.setAttribute("id","op3id");
    g1.innerHTML = quiz[ran].answer.C;
    op3.setAttribute("onclick","addValC()");
    op3.appendChild(g1);
    gameScreen.appendChild(op3);

    var op4 = document.createElement("div");
    op4.classList.add("op4");
    var h1 = document.createElement("p");
    h1.setAttribute("id","op4id");
    h1.innerHTML = quiz[ran].answer.D;
    op4.setAttribute("onclick","addValD()");
    op4.appendChild(h1);
    gameScreen.appendChild(op4);

  // Next Button
    var j = document.createElement("button");
    j.classList.add("next");
    j.setAttribute("onclick","chk()");
    j.innerHTML ="Check";
    gameScreen.appendChild(j);

    //Change Button

    var k = document.createElement("button");
    k.classList.add("change");
    // k.setAttribute("onclick","chan()");
    k.innerHTML = "Change";
    gameScreen.appendChild(k);

    console.log(gameScreen);


  }

//   function chan(){
//     const ran = Math.floor(Math.random()*10);
//    document.getElementById("ques").innerHTML = quiz[ran].question;
//    document.getElementById("op1id").innerHTML = quiz[ran].answer.A;
//    document.getElementById("op2id").innerHTML = quiz[ran].answer.B;
//    document.getElementById("op3id").innerHTML = quiz[ran].answer.C;
//    document.getElementById("op4id").innerHTML = quiz[ran].answer.D;
// console.log(ran);

//    }
  
 



// Value Check 
var val = [];

function addValA(){
val.push(quiz[ran].answer.A);
console.log(val);

}


function addValB() {
    val.push(quiz[ran].answer.B); 
    console.log(val); 

}

function addValC() {
    val.push(quiz[ran].answer.C); 
    console.log(val); 
    
}

function addValD() {
    val.push(quiz[ran].answer.D); 
    console.log(val); 
}

function chk(){

    var z= val.slice(-1).pop();;
console.log(z);
  if(quiz[0].question && z === quiz[0].answer.B){
      alert("your answer is right");
    
  }

  else if(quiz[1].question && z === quiz[1].answer.A){
    alert("your answer is right");
  
  }

  else if(quiz[2].question && z === quiz[2].answer.B){
    alert("your answer is right");
    
  }

  else if(quiz[3].question && z === quiz[3].answer.C){
    alert("your answer is right");
    
  }

  else if(quiz[4].question && z === quiz[4].answer.B){
    alert("your answer is right");
    
  }

  else if(quiz[5].question && z === quiz[5].answer.B){
    alert("your answer is right");
    
  }

  else if(quiz[6].question && z === quiz[6].answer.B){
    alert("your answer is right");
    
  }

  else if(quiz[7].question && z === quiz[7].answer.A){
    alert("your answer is right");
    
  }

  else if(quiz[8].question && z === quiz[8].answer.D){
    alert("your answer is right");
    
  }
  
  else if(quiz[9].question && z === quiz[9].answer.D){
    alert("your answer is right");
    
  }


  else{
      alert("your answer is wrong")
  }

}






 