var quiz = {}

function upploadQuestion() {
  
  quiz.Question = document.getElementById('Question').value
  quiz.option1 = document.getElementById('option1').value
  quiz.option2 = document.getElementById('option2').value
  quiz.option3 = document.getElementById('option3').value
  quiz.option4 = document.getElementById('option4').value
  quiz.correctAnswer = document.getElementById('correctAnswer').value
  
	firebase.database().ref('/').child('Quiz Data').push(quiz);
}


var Data = document.getElementById('data')
var arr = []

function getData(){
    firebase.database().ref('/').child('Quiz Data').on('child_added', function (data) {
        arr.push(data.val())
        Data.innerHTML= ''
        for(var i=0; i<arr.length; i++){    
            Data.innerHTML += ` <tr>
            <td>${arr[i].Question}</td>
            <td>${arr[i].option1}</td>
            <td>${arr[i].option2}</td>
            <td>${arr[i].option3}</td>
            <td>${arr[i].option4}</td>
            <td>${arr[i].correctAnswer}</td>            
          </tr>`
        }
    })
    console.log(arr)
}
getData()


