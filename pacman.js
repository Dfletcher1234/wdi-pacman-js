// Setup initial game stats
var score = 0;
var lives = 2;
var powerPellets = 4;

// Define your ghosts here
var inky = {
  menu_option: '1',
  name: 'Inky',
  colour: 'Red',
  character: 'Shadow',
  edible: false
};

var blink = {
menu_option: '2',
name: 'Blink',
colour: 'Cyan',
character: 'Bashful',
edible: false
};

var pinky = {
  menu_option: '3',
  name: 'Pinky',
  colour: 'Pink',
  character: 'Bashful',
  edible: false
}
var clyde = {
menu_option: '4',
name: 'Clyde',
colour: 'Orange',
character: 'Pokey',
edible: false
}



ghosts = ['Inky', 'Blink','Pinky','Clyde']


// Draw the screen functionality
function drawScreen() {
  clearScreen();
  setTimeout(function() {
    displayStats();
    displayMenu();
    displayPrompt();
  }, 10);
}

function clearScreen() {
  console.log('\x1Bc');
}

function displayStats() {
  console.log('Score: ' + score + ' Lives: '+ lives +

  '\n\Power Pellets: ' + powerPellets );
}
function eatGhost(ghost){
  console.log('\n');
  if (ghost.edible === false){
  lives -= 1
}
}

function eatPowerPellet(){
  score += 50
  powerPellets -= 1
  inky.edible = true;
  blink.edible = true;
  pinky.edible = true;
  clyde.edible = true;

}
function checkLife(){
  if (lives === 0){
  process.exit()
}
}
function isTrue(ghost) {
  if (ghost.edible === true){
    console.log( 'you just ate a happy ghost');
    score += 200
    ghost.edible = false
  }

}

function displayMenu() {
  console.log('\n\nSelect Option:\n');  // each \n creates a new line
  console.log('(d) Eat Dot');
  if (powerPellets < 1  ){

  console.log("You are out of power pellets.")}
  else{
    console.log('(p) Eat Power-Pellet');


  }
  console.log('(1) Eat Inky'); + isEdible(inky)
  console.log('(2) Eat Blink'); + isEdible(blink)
  console.log('(3) Eat Pinky'); + isEdible(pinky)
  console.log('(4) Eat Clyde'); + isEdible(clyde)
  console.log('(q) Quit');
}

function displayPrompt() {
  // process.stdout.write is similar to console.log except it doesn't add a new line after the text
  process.stdout.write('\nWaka Waka :v '); // :v is the Pac-Man emoji.
}

function isEdible(ghost){
  if (ghost.edible === true){
    console.log('edible')}
 else{
   console.log('inedible');
}
}
// Menu Options
function eatDot() {
  console.log('\nChomp!');
  score += 10;
}


// Process Player's Input
function processInput(key) {
  switch(key) {
    case '\u0003': // This makes it so CTRL-C will quit the program
    case 'q':
      process.exit();
      break;
    case 'd':
      eatDot();
      break;
      case 'p':
      eatPowerPellet();
      break;
      case'1':
      eatGhost(inky);
      isTrue(inky);
      checkLife();
      break;
      case'2':
      eatGhost(blink);
      isTrue(inky);
      checkLife();
      break;
      case'3':
      eatGhost(pinky);
      isTrue(inky);
      checkLife();
      break;
      case'4':
      eatGhost(clyde);
      cisTrue(inky);
      checkLife();
      break;

    default:
      console.log('\nInvalid Command!');
  }
}


//
// YOU PROBABLY DON'T WANT TO CHANGE CODE BELOW THIS LINE
//

// Setup Input and Output to work nicely in our Terminal
var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

// Draw screen when game first starts
drawScreen();

// Process input and draw screen each time player enters a key
stdin.on('data', function(key) {
  process.stdout.write(key);
  processInput(key);
  setTimeout(drawScreen, 300); // The command prompt will flash a message for 300 milliseoncds before it re-draws the screen. You can adjust the 300 number to increase this.
});

// Player Quits
process.on('exit', function() {
  console.log('\n\nGame Over!\n');
});
