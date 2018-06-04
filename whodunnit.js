// Episode 1
//will return "My name is Bob"
var name = 'Bob';


var printName = function() {
  console.log('My name is ' + name );
};

printName();

// Episode 2
// will return 3

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// Episode 3
// will print out a list of index positions with their respective positions

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// Episode 4
// suspectThree will print out as Colin when you run the allSuspects() method.
//suspectThree will be Upul on line 53.

var suspectOne = 'Ally';
var suspectTwo = 'Alan';
var suspectThree = 'Upul';
var suspectFour = 'Alistair';

var allSuspects = function() {
  var suspectThree = 'Colin'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour) //here Colin
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree ); //here Upul


// Episode 5
// name will be changed to Poirot
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());


// Episode 6
// The murderer is Rick see explaination below

var murderer = 'Rick';

var outerFunction = function() {
  var murderer = 'Morty';

  var innerFunction = function() {
    murderer = 'Jerry';
    // console.log(murderer); => returns Jerry
  }

  innerFunction();
}

outerFunction();
// Here the function is being called and if we were to output or return from within the function the murder would be Jerry.

console.log('the murderer is ', murderer);
