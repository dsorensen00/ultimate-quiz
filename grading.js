
grader=()=>{


    let question1 = document.quiz.question1.value;
	let question2 = document.quiz.question2.value;
	let question3 = document.quiz.question3.value;
    let correct = 0;


    if(question1 == 'Darth Vader'){
        correct++;
    }
    if(question2 == 'Apple'){
        correct++;
    }
    if(question3 == 'Subaru'){
        correct++;
    }
    
    let pictures = ['img/win.gif', 'img/meh.jpeg', 'img/lose.gif'];
	let messages = ['Great job!', "That's just okay", 'You really need to do better'];
	let score= null;
    
    
    if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	
    
    

}