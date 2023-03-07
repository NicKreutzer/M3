const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

const print = (output) => {
   process.stdout.write(output);
   process.stdout.write("\nprompt > ");
}

const bash = () => {
   process.stdout.write("prompt > ");
   process.stdin.on("data", (data)=> {
      let args = data.toString().trim().split(" ");
      const cmd = args.shift();
      args = args.join(" ");
      //console.log(args);
      commands[cmd] ? commands[cmd](print, args) : print(`command not found: ${cmd}`);
      //* if(commands.hasOwnProperty(cmd)){
      //*    commands[cmd](print, args);
      //* }else{
      //*    print(`comamnd not found: ${cmd}`);
      //* }
   })
}

// console.log(process.stdout);

bash();
module.exports = {
   print,
   bash,
};
