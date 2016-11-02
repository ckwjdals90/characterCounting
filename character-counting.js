var anyStr = process.argv.slice(2);
var explodedArray = [];

var characterCountObject = {};

for(var i = 0; i < anyStr.length; i += 1) {
  explodedArray += anyStr[i];
}

var usableString = explodedArray.split('');

function characterCounter(string) {
  for (var letter of string) {
    if (!characterCountObject[letter]) {
      characterCountObject[letter] = 1;
    } else {
      characterCountObject[letter] += 1;
    }
  }
}

characterCounter(usableString);
console.log(characterCountObject);