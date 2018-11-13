function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];
  for (var i = 0; i < musicians.length; i++) {
    theBeatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return theBeatles
}

function johnLennonFacts(newJLF){
  var newJLF = [];
  var i = 0
  while (i < johnLennonFacts.length) {
    newJLF.push(johnLennonFacts[i] + "!!!")
    i++;
  }
  return newJLF
}

function iLoveTheBeatles(n){
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++

  } while (n < 15);
  return love;
}
