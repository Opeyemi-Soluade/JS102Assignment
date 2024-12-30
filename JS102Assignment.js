function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function guessNumber(){
	const minNum = 1;
	const maxNum = 100;
	const secretNum = getRandomNumber(minNum, maxNum);

	let guess;
    let attempts = 0;
    while (attempts <= 2) {
    	guess = prompt(`Guess a number between ${minNum} and ${maxNum}`);
    	attempts++
        if(guess === null || isNaN(guess)) {
        	alert("Please enter a valid number");
        	continue;
        }
        guess = parseInt(guess);
        //guess = +guess;
        if (guess === secretNum) {
        	alert(`Congrats! you guessed the number ${secretNum} in ${attempts} attempts`);
        	break;
        } else if(guess < secretNum){
          alert('Too low, Try again')	
        } else {
          alert('Too High, Try again');
        }
        
    }
        if(guess != secretNum)
        	{alert('You cannot have more than three chances, game over!');}
}
        guessNumber(); // Calling the function to run