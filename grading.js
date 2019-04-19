
export default ()=>{


    const question1 = document.quiz.question1.value;
	const question2 = document.quiz.question2.value;
	const question3 = document.quiz.question3.value;
    const correct = 0;


    if(question1 === 'Darth Vader'){
        correct++
    }
    if(question2 === 'Apple'){
        correct++
    }
    if(question3 === 'Subaru'){
        correct++
    }
    if(correct === 3){
        return(
            <>
                

            </>
        )
    }
    
    

}