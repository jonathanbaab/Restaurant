var TodaysTime = prompt('What time is it?');



if (TodaysTime > 18) {
    greeting = 'Good evening!'
} else if (TodaysTime > 12) {
    greeting = 'Good afternoon!';
} else {
    greeting = 'Good to see you!';
}

document.write('<h3>'+ greeting + '</h3>');

