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
  const cmd = data.toString().trim();

  if (cmd == "pwd") {
    pwd()
  } else if (cmd == 'ls'){
    ls()
  } else if (cmd.slice(0,4) = "cat ") {
    let cmd2 = cmd.slice(4, cmd.length);
    cat(cmd2);
  }

  else {
  process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');

});
