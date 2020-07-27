function ageIndays()
{
    var birthYear=prompt('What year you were born ?');
    var ageIndays=(2020-birthYear)*365;
    var h1= document.createElement('h1');
    var textanswer= document.createTextNode('You are ' + ageIndays+ ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textanswer);
    document.getElementById('result').appendChild(h1);

}

function reset()
{
    document.getElementById('ageInDays').remove();
}

function generatecats(){

    var image= document.createElement('img');
    image.src="https://media.giphy.com/media/EJsTKyvaYzvm8/giphy.gif"
    document.getElementById('result1').appendChild(image);
}

//challenge 3 rock paper scissor

function rps(yourChoice) {
	var humanChoice, botChoice;
	humanChoice = yourChoice.id;
	botChoice = numbertochoice(Math.floor(Math.random()*3));
    result = decideWinner(humanChoice, botChoice);// won loss or tie
    console.log(result);
    message = finalMessage(result);//('message': 'you won' ,'color':green)
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message);
}
function numbertochoice(number){
	return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,botChoice) {
	var rpsdatabase ={
		'rock':{'scissors':1, 'paper':0 ,'rock':0.5},
		'paper':{'scissors':0, 'paper':0.5 ,'rock':1},
		'scissors':{'scissors':0.5, 'paper':1 ,'rock':0}
	}
var yourScore = rpsdatabase[yourChoice][botChoice];
var botscore = rpsdatabase[botChoice][yourChoice];
return [yourScore,botscore];	
}
function finalMessage([yourScore, botscore]){
	if(yourScore === 0) {
       return {'message':'You lost!', color: 'red'};
	}
	else if(yourScore === 1) {
	   return {'message':'You Won!', color: 'green'};
	}
    else {
    	return {'message':'You tied!', color: 'yellow'};
    }
}

function reg()
{  location.reload();

    //location.reload();
}
function rpsFrontEnd(YourImageChoice,botImageChoice,finalMessage){
	var imageDatabase = {
		'rock': document.getElementById('rock').src,
		'paper': document.getElementById('paper').src,
		'scissors': document.getElementById('scissors').src
	}
	//let's remove all the elements
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();
var humandiv = document.createElement('div');
var botdiv = document.createElement('div');
var messageDiv = document.createElement('div');

humandiv.innerHTML =" <img src='" + imageDatabase[YourImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1')>";
document.getElementById('displayarena').appendChild(humandiv);
messageDiv.innerHTML =" <h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] +"</h1>";
document.getElementById('displayarena').appendChild(messageDiv);
botdiv.innerHTML =" <img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1')>";
document.getElementById('displayarena').appendChild(botdiv);

document.getElementById('result2').innerHTML=" <button id='khelo' onclick='reg()' class='btn btn-lg bg-success text-white'> Play again </button>";
document.getElementById('playagain').appendChild(result2);



}


