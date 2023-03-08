"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemA: problemA,
  problemB: problemB,
  problemC: problemC,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  //! Callback version:
  // exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza2) {
  //   exerciseUtils.blue(stanza2);
  //   exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
  //     exerciseUtils.blue(stanza3);
  //   });
  // });

  //! Promise version:
  exerciseUtils.promisifiedReadFile("poem-one/stanza-02.txt")
  .then(stanza2 => exerciseUtils.blue(stanza2))
  exerciseUtils.promisifiedReadFile("poem-one/stanza-03.txt")
  .then(stanza3 => exerciseUtils.blue(stanza3))
}

function problemB() {
  //! Callback version:
  // exerciseUtils.readFile(
  //   "poem-one/wrong-file-name.txt",
  //   function (err, stanza4) {
  //     if (err) exerciseUtils.magenta(new Error(err));
  //     else exerciseUtils.blue(stanza4);
  //   }
  // );

  //! Promise version:
  exerciseUtils.promisifiedReadFile("poem-one/wrong-file-name.txt")
  .then(stanza4 => exerciseUtils.blue(stanza4))
  .catch(err => exerciseUtils.magenta(new Error(err)))
}

function problemC() {
  //! Callback version:
  // exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
  //   if (err) return exerciseUtils.magenta(new Error(err));
  //   exerciseUtils.blue(stanza3);
  //   exerciseUtils.readFile(
  //     "poem-one/wrong-file-name.txt",
  //     function (err2, stanza4) {
  //       if (err2) return exerciseUtils.magenta(new Error(err2));
  //       exerciseUtils.blue(stanza4);
  //     }
  //   );
  // });

  //! Promise version:
  exerciseUtils.promisifiedReadFile("poem-one/stanza-03.txt")
  .then(stanza3 =>{
    exerciseUtils.blue(stanza3)
    return exerciseUtils.promisifiedReadFile("poem-one/wrong-file-name.txt")
  })
  .then(stanza4 => exerciseUtils.blue(stanza4))
  .catch(err => exerciseUtils.magenta(new Error(err)))
  
  //? exerciseUtils.promisifiedReadFile("poem-one/stanza-03.txt")
  //? .then(stanza3 => exerciseUtils.blue(stanza3))
  //? .catch(err => exerciseUtils.magenta(new Error(err)))

  //? exerciseUtils.promisifiedReadFile("poem-one/wrong-file-name.txt")
  //? .then(stanza4 => exerciseUtils.blue(stanza4))
  //? .catch(err => exerciseUtils.magenta(new Error(err)))
}
