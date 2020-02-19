
var data = {
    qnum:0,
    questions : [
        {
            title:"What Comes After A?",
            answer:"B",
            bgcolor:"yellow",
            img: "http://placekitten.com/100/100"
        },
        {
            title: "Is 5 bigger than 4?",
            answer:"Yes",
            bgcolor:"#ABC",
            img: "http://placekitten.com/200/200"

        },
        {
            title:  "What is the color of a banana?",
            answer: "Yellow",
            bgcolor:"blue",
            img: "http://placekitten.com/300/300"
        },
        {
            title:  "What is your set?",
            answer: "B",
            bgcolor:"red",
            img: "http://placekitten.com/400/400"
        }
    ]
}

// var answer = "B";
// var qnum = 0;


// var questions = [
//     "what Comes after A?",
//     "Is 5 bigger than 4?",
//     "What is the color of a banana?",
//     "What is your set?"
// ];


// var answers = [
//     "B",
//     "Yes",
//     "Yellow",
//     "B"
// ];

// var bgcolor = [
//     "yellow",
//     "#ABC",
//     "rbg(2,150,232)"
// ]
// var imgs = [
//     "http://placekitten.com/100/100",
//     "http://placekitten.com/200/200",
//     "http://placekitten.com/300/300",
// ]
console.log(data,window);

function Start() {
    document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' / >";


}
function CheckAnswer() { 

    var myInp = document.querySelector("#answer").value;
    console.log(myInp);

    if(myInp === data.questions[data.qnum].answer){
        // alert("Correct!");
        document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

        data.qnum++;
        document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' / >";

        //changing the question to the next question

        // if(qnum === 1){

        //     qnum++;
        // document.querySelector("#h_q").innerText = "Is 5 bigger than 4?";
        // answer = "Yes";

        // } else if(qnum === 2){
        //     qnum++;
        //     document.querySelector("#h_q").innerText = "What is the color of a banana?";
        //     answer = "Yellow";

        // }
    } else {
        document.querySelector("#h_r").innerText  = "<h1>WRONG!</h1>";
    }




}

Start();
    // alert("WRONG!");