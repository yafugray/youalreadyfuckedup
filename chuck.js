// var answer = "B"; // so that you can change the anwer
// var qnum = 1;

// function CheckAnswer(){
//     // if ????
//     /*
//     check if whatthey type do is equivalent to a string of your answer...
//     */

//    var myInp = document.querySelector("#input").value;
//    console.log(myInp);

//    if(myInp === answer) {
//     //    alert("Correct!")
//        document.querySelector('#underspace').innerHTML = "<h4> YASSSS </h4>"

//         //It changes the question to the next question
//         if(qnum === 1) {
//                 qnum++;
//                 document.querySelector('#qst').innerText = "Is 5 bigger than 4?";
//                 answer = "Yes"; // and then you change the answer's variable.
//         }else if (qnum === 2) {
//                 qnum++;
//                 document.querySelector('#qst').innerText = "What is the colour of a Banana?";
//                 answer = "Yellow"; 
//         } // if you keep change the numbers, you can add lots of questions.
//     } else {
//     //    alert("LEARN MY LANGUAGE")
//         document.querySelector('#underspace').innerHTML = "<h4> LEarN mY laNGuAgE </h4>"
//     //    document.querySelector('#underspace').innerText = "<h3> LEarN mY laNGuAgE </h3>"
//        // innerText <-  this doesn't work like a html, it just shows text and doesn't read the html codes
//    }
// }
//  <- original version and longgggg as fuck 



//Simple version

var data = { //this is easy for you gaterhing the informations.
    numq:0, //object architecture. so we use colon
    questions:[
        {
            title:"What Comes After A?",
            answers:"B",
            bgcolor:"#FCE",
            img:"http://placekitten.com/100/100"
        },
        {
            title:"Is 5 Bigger Than 4?",
            answers:"Yes",
            bgcolor:"#ABC",
            img:"http://placekitten.com/200/200"
        },
        {
            title:"What Is The Colour Of a Banana?",
            answers:"Yellow",
            bgcolor:"rgb(2,150,132)",
            img:"http://placekitten.com/300/300"
        },
        {
            title:"Where Is The Capital City of South Korea?",
            answers:"Seoul",
            bgcolor:"#DAD",
            img:"http://placekitten.com/400/400"
        }
    ]
}
// var answers = "B" <- useless

var numq = 0;

var bgcolor = [
    "Yellow",
    "#ABC",
    "rgb(2.150,132",
    "#DAD"
];

var imgs = [
    "http://placekitten.com/100/100",
    "http://placekitten.com/200/200",
    "http://placekitten.com/300/300",
    "http://placekitten.com/400/400",
]

var questions = [
    "What Comes After A?",
    "Is 5 Bigger Than 4?",
    "What Is The Colour Of a Banana?",
    "Where Is The Capital City of South Korea?"
];

var answers = [
    "B",
    "Yes",
    "Yellow",
    "Seoul"
];

// function CheckAnswer(){
//    var myInp = document.querySelector("#input").value;
//    console.log(myInp);

//    if(myInp === answers[numq]) {
//        document.querySelector('#underspace').innerHTML = "<h4> YASSSS </h4>"
//        numq++;
//        document.querySelector('#qst').innerText = questions[numq];

//     } else {
//         document.querySelector('#underspace').innerHTML = "<h4> LEarN mY laNGuAgE </h4>"
//    }
// }
console.log(data, window) //you can see arrays or what your doing.
// version 2
function Start (){
        document.querySelector('#qst').innerText = data.questions[data.numq].title; // you can put the 0 instead of [data.numq] but not recommended.
        document.body.style.backgroundColor = data.questions[data.numq].bgcolor;
        document.querySelector('#underspace').innerHTML = "<img src='"+data.questions[data.numq].img+"' />";
}

function CheckAnswer(){
    var myInp = document.querySelector("#input").value;
    console.log(myInp);
 
    if(myInp === data.questions[data.numq].answers) {
        document.querySelector('#underspace').innerHTML = "<h4> YASSSS </h4>"
        data.numq++;
        document.querySelector('#qst').innerText = data.questions[data.numq].title;
        document.body.style.backgroundColor = data.questions[data.numq].bgcolor;
        document.querySelector('#underspace').innerHTML += "<img src='"+data.questions[data.numq].img+"' />";
     } else {
         document.querySelector('#underspace').innerHTML = "<h3> YOU STUPID B </h3>"
         document.querySelector('#underspace').innerHTML +=
         "<img src = https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmRAmnGhTBdW2mdM2sYBr4ky8FyJ4aeJkZBmLzR99fExaK/1529682676176.jpg>";
    } // if you do the += then it will show the text and picture at the same time! or picture will just replace the text.
 }

 Start();
