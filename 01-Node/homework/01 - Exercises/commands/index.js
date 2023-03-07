const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print, args) {
    //print(__dirname);
    print(process.cwd());
}

function date(print, args) {
    print(Date());
}

function echo(print, args) {
    print(args);
}

function ls(print, args) {
    fs.readdir(".", (error, files) => {
        if(error) throw new Error(error);
        print(files.join(" "));
    })
}

function cat(print, args) {
    fs.readFile(args, "utf-8", (error, data) => {
        if(error) throw new Error(error);
        print(data);
    })
}

function head(print, args) {
    fs.readFile(args, "utf-8", (error, data) => {
        if(error) throw new Error(error);
        let lines = data.split("\n");  //! "\n" === <br/>
        print(lines[0]);
    })
}

function tail(print, args) {
    fs.readFile(args, "utf-8", (error, data) => {
        if(error) throw new Error(error);
        let lines = data.split("\n");  //! "\n" === <br/>
        print(lines.pop().trim());  //! .pop() Devuelve el ultimo line.
    })                              //! .trim() Saca los espacios al final y al principio del string.
}

function curl(print, args) {
    //console.log(typeof args);
    utils.request(args, (error, response) => {
        if(error) throw new Error(error);
        print(response.data);
    })
}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl,
};
