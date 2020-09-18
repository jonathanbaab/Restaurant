
function guessing() {var correctNum = 3;
for (var i = 0; i < 4; i++){
    var guess = prompt ('Pick a number between 1 and 10');
    if ((i===3)&& (correctNum !== parseInt(guess))){
        alert("Oh well, we can't all be winners");
    }
    else if(parseInt(guess) === correctNum) {
        alert ('You are right!');
        break;
    }
    else if (guess !== correctNum) {
        alert('sorry, try again');
    }
}

}






function dessertChoice(){
    var question1 = prompt('Do you prefer sweet or salty?');
        if (question1 == 'sweet') {
            document.write('try our delicious desserts')
        }
        if (question1 == 'salty') {
            document.write('HAVE SOME FRIES WITH THAT!')
        }
       
 }   




function askName2(){
    var userAnswer = confirm('Are you hungry?');
        if (userAnswer == true){
            alert('We have some great desserts for you!')
        } else if (userAnswer == false){
            alert('Better luck next time!')
        }
}


 

function haveName () {
    var question0;
    question0 = prompt('do you have a name?');

    if(question0.toLowerCase() === 'yes'){
            question0 = prompt('what is your name?')

            }else{
                        question0 = prompt('but do you have a name?');
                        document.write('Hello ' + question0);

                    }
                }
    // for(var i = 0; i < 5; i++){
    //    question0 = prompt('do you have a name?');
        
    //     console.log(i);

    //     if(question0.toLowerCase() === 'yes'){
    //         question0 = prompt('what is your name?')
    //     } else {
    //         question0 = prompt('but do you have a name?');
    //         document.write('Hello ' + question0);

    
    


    


{


    
}





function name () {var question1 = prompt('What is your name?');

document.write('Welcome ' + question1 + "!");

}



// correctPassword = prompt('Enter your password: ');
// while (correctPassword !== password){
//     correctPassword = prompt('Try again.  Enter your password: ');
// }


function timeZ () {

    var TodaysTime = prompt('What time is it?');

if (TodaysTime > 18) {
    greeting = 'Good evening!'
} else if (TodaysTime > 12) {
    greeting = 'Good afternoon!';
} else {
    greeting = 'Good to see you!';
}
document.write('<h3>'+ greeting + '</h3>');}


function age () {

var userAge = prompt('How old are you?');

var quote = userAge +' is the perfect age for dessert!';

if (userAge = true) {

document.write( quote );
}

}