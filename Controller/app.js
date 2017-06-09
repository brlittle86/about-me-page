'use strict';

console.log('Successfully linked with index.html');

var awesome = true;

function likeABoss1(awesomeParam1, awesomeParam2) {
  if (awesome) {
    console.log(awesomeParam1 + ' ' + awesomeParam2);
  }
}
function likeABoss2(awesomeParam1, awesomeParam2) {
  if (awesome) {
    console.log(awesomeParam1 + ' ' + awesomeParam2);
  }
}

likeABoss1('You\'re', 'cool.');
likeABoss2('Still', 'cool.');