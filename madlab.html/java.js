
function checkAnswer(){
    var score = 0;
    quiz= document.forms.Quiz.elements;
    // ASSIGN THE ANSWER TO THE QUESTION TO THE ANSWER1 VARIABLE
    answer1 = quiz.country.value;
    // check the answer to the first question
    if(answer1 == "brazil"){
    //add 1 to the score
    score = score + 1;
    }
    answer2 = quiz.cup.value;
    if(answer2 == "1"){
        score = score + 1;
    }
    answer3 = quiz.goal.value;
    if(answer3 == "Kylian Mbappe"){
        score = score + 1;
    }
    answer4 = quiz.league.value;
    if(answer4 == "Arsenal"){
        score = score + 1;
    }
    answer5 = quiz.united.value;
    if(answer5 == "true"){
        score = score + 1;
    }
    userName = quiz.name.value;
    alert ("well done, " + userName + " your score was..." + score);}