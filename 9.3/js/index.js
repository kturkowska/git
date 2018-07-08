/* oznaczam button odpowiadajacy za rozpoczęcie rozgrywki*/
var newGameBtn = document.getElementById('newGameButton');
newGameBtn.addEventListener('click', newGame); 

/* zmienne podpięte pod konkretne buttony oznaczające wybór gracza*/
var pickRock = document.getElementById('playerPick_rock'),
    pickPaper = document.getElementById('playerPick_paper'),
    pickScissors = document.getElementById('playerPick_scissors');

/* kliknięcie powoduje uruchomienie funkcji - gracz wybrał jedną z trzech opcji*/
pickRock.addEventListener('click', function() { 
	playerPick('rock')
});
pickPaper.addEventListener('click', function() { 
	playerPick('paper')
});
pickScissors.addEventListener('click', function() {
	playerPick('scissors') 
});

/* nadaję wartości dla stanu nierozpoczętej gry*/
var gameState = 'notStarted'
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    },
    rounds = {
      number: ''
    };

/* podpinam pod zmienne te fragmenty, które maja być lub nie mają być wyświetlane w różnych stadiach gry*/
var newGameElem = document.getElementById('newGameElement'),
	pickElem = document.getElementById('playerPickElement'),
	resultsElem = document.getElementById('resultsTableElement');

/* ustalam co sie wyświetla przed, w trakcie i po zakończonej grze oraz jakie przyjmuje wartości*/
function setGameElements() {
	switch(gameState) {
		case 'started':
				newGameElem.style.display = 'none';
				pickElem.style.display = 'block';
				resultsElem.style.display = 'block';
			break;
		case 'ended':
				newGameBtn.innerText = 'Once more';
                playerPickElem.textContent = "Your choice";
                computerPickElem.textContent = "Computer's choice";
                playerResultElem.textContent = "Your score";
                computerResultElem.textContent = "Computer's score";
		case 'notStarted':
		default:
				newGameElem.style.display = 'block';
				pickElem.style.display = 'none';
				resultsElem.style.display = 'none';
	}
}
setGameElements();

/* zmienne podpięte pod konkretne divy, w których wyświetlają sie informacje o graczach*/
var playerPointsElem = document.getElementById('playerPoints'),
    playerNameElem = document.getElementById('playerName'),
    computerPointsElem = document.getElementById('computerPoints');

/* funkcja w której określam zmienne konieczne do rozpoczęcia rozgrywki - wyświetlane w promptach*/
function newGame() {
  rounds.number = prompt('How many wins does it make the game end?', 'Type number of rounds needed to be won');
  if (isNaN(rounds.number)) {
    alert('Wrong value! Please type a number')
    rounds.number = prompt('How many wins does it make the game end?', 'Type number of rounds needed to be won or we will be playing till my battery is down');
  }
  player.name = prompt('What is your name?', 'Player'); 
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }
}

/* wywołuję wybór gracza*/
function playerPick(playerPick) {
    console.log(playerPick);
}

/* oznaczam zmienną, z której funkacja ma losować za pomocą math.random jedną z trzech mozliwości. w ten sposób mam już wybór którego "dokonuje" komputer */
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

/* zmienne podpięte pod informacje o graczach - będa potrzebne do zmiany wyświetlanych danych w zależności od wyniku rozgrywki*/
var playerPickElem = document.getElementById('playerPick'),
    computerPickElem = document.getElementById('computerPick'),
    playerResultElem = document.getElementById('playerResult'),
    computerResultElem = document.getElementById('computerResult');

/* przywołuje wybór komputera, bo jest mi potrzebny w nastepnyc linijkach*/
function playerPick(playerPick) {
    var computerPick = getComputerPick();
   
/* ustalam, którą zmienną wyświetla dany element*/  
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}

/* funkcja, w której określam zwycięzcę rundy. zakładam, ze wygrywa Player*/
function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';
	var winnerIs = 'player';
  
 /* teraz definiuje wyjatki od załozonej reguły*/
	if (playerPick == computerPick) {
        winnerIs = 'noone';
        playerResultElem.innerHTML = "It's a tie";
        computerResultElem.innerHTML = "It's a tie";
    } else if (
    	(computerPick == 'rock' &&  playerPick == 'scissors') ||
    	(computerPick == 'scissors' &&  playerPick == 'paper') ||
    	(computerPick == 'paper' &&  playerPick == 'rock')) {
    	winnerIs = 'computer';
    }
  
/* wpisuję jak dokładnie mają zmieniać sie wyświetlane wartości w zależności od rezultatu rundy. wyświetla sie informacja o tym cz ktoś wygrał i kto oraz licznik wygranych idzie o oczko w górę u któregoś gracza - lub pozostaje bez zmian*/
    if (winnerIs == 'player') {
    	playerResultElem.innerHTML = "You won! but I let You to";
    	player.score++;
    } else if (winnerIs == 'computer') {
    	computerResultElem.innerHTML = "I won! Who is the master?!";
    	computer.score++;
    }
    setGamePoints();
    gameFinished();
}
/* funkcja do obliczania wyników graczy*/
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}
/* jeśli którys z graczy osiągnie wymagana ilosc zwycięsw - funkcja wskaże wygranego całej rozgrywki oraz zmieni status gry na zakończony*/
function gameFinished() {
    if (player.score == rounds.number) {
        alert("You won " + rounds.number + ' rounds! So I guess I have to admit You are The Winner.')
        gameState = 'ended'
    } else if (computer.score == rounds.number) {
        alert("I won " + rounds.number + ' rounds. I always do. I am a damn master of this game!')
        gameState = 'ended'
    }
    setGameElements();
}