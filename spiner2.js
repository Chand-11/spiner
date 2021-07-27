let cursor = '|\\/-\|/-\\';
let sec = 100;
for (const i of cursor) {
  setTimeout(() => {process.stdout.write('\r'+i+'   ');  }, sec);
  sec +=200;  ///delay time by incrementing +100
}