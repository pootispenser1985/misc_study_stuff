/* I "wrote" the following code, but not actually, it's just the solution to a 
freecodecamp.org lesson that I thought was particularly interesting. Saving 
for educational purposes. Special thanks to the Node.js API manual. */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
    });

var count = 0;

function cc(card) {
  // Only change code below this line
  if (card <= 6) {
    count++;
    if (count > 0) {
      return count.toString() + " Bet";
    }
    else {
      return count.toString() + " Hold";
    }
  }
  else if (card == 7 || card == 8 || card == 9) {
    if (count > 0) {
      return count.toString() + " Bet";
    }
    else {
      return count.toString() + " Hold";
    }
  }
  else {
    count--;
    if (count > 0) {
      return count.toString() + " Bet";
    }
    else {
      return count.toString() + " Hold";
    }
  }
}

/* this doesnt work, I got distracted, continuing on fcc */
for (i = 0; i < 5; i++) {
    count = 0;
    cc(readline());
}
