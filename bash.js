// process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();


// process.stdout.write('You typed: ' + cmd);
// process.stdout.write('\nprompt > ');

// });

const pwd = require('./pwd.js')
const ls = require('./ls.js')
const cat = require('./cat.js')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const origCmd = data.toString().trim();
  const [cmd, fileName] = origCmd.split(' ')
  if (cmd == "pwd") {
    pwd()
  } else if (cmd == 'ls'){
    ls()
  } else if (cmd == 'cat ') {
    cat(fileName);
  }

  else {
  process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');

});
