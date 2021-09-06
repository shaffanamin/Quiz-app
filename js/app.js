var quizName = document.getElementById('quizName');
var presentQuestionNum = document.getElementById('presentQuestionNum');
var totalQuestionNum = document.getElementById('totalQuestionNum');
var mainDivOfQuestion = document.getElementById('mainDivOfQuestion');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');



var mainDiv = document.getElementById('mainDiv')
var i=0
var arr = []


var marks = 0; 
    
function getData(){
    firebase.database().ref('/').child('Quiz Data').on('child_added', function (data) {
        arr.push(data.val())
        presentQuestionNum.innerHTML = 1;
        mainDivOfQuestion.innerHTML = arr[i].Question;
        totalQuestionNum.innerHTML = arr.length;
        opt1.innerHTML = arr[i].option1;
        opt2.innerHTML = arr[i].option2;
        opt3.innerHTML = arr[i].option3;
        opt4.innerHTML = arr[i].option4;
        opt1.value = arr[i].option1;
        opt2.value = arr[i].option2;
        opt3.value = arr[i].option3;
        opt4.value = arr[i].option4;
    })
}
$("button").click(function() {
    var fired_btn = $(this).val();
    console.log(fired_btn);
    console.log(marks)
    if(fired_btn == arr[i].correctAnswer){
        marks++;
    }
});
getData()


function update(){
    
    if( (i+1) != arr.length)
    {
        i++;
        presentQuestionNum.innerHTML ++;
        mainDivOfQuestion.innerHTML = arr[i].Question;
        opt1.innerHTML = arr[i].option1;
        opt2.innerHTML = arr[i].option2;
        opt3.innerHTML = arr[i].option3;
        opt4.innerHTML = arr[i].option4;
        opt1.value = arr[i].option1;
        opt2.value = arr[i].option2;
        opt3.value = arr[i].option3;
        opt4.value = arr[i].option4;
    }
    else if( (i) != arr.length){
        alert('You Have Secure: '+ marks);
        window.location.replace("index.html");
    }
    else
    {
        // console.log("Questions is completed");  
        // if(fired_btn == arr[i].correctAnswer){
        //     marks++;
        // }     
    }
}
