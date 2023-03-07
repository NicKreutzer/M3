const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

const pwd = (print, args) => {
    //print(__dirname);
    print(process.cwd());
}

const date = (print, args) => {
    print(Date());
}

const echo = (print, args) => {
    print(args);
}

const ls = (print, args) => {
    fs.readdir(".", (error, files) => {
        if(error) throw Error(error);             //? TERNARIOS NO SIRVEN PARA ERRORES.
        print(files.join(" "));
    })
}

const cat = (print, args) => {
    fs.readFile(args, "utf-8", (error, data) => {
        if(error) throw Error(error);
        print(data);
    })
}

const head = (print, args) => {
    fs.readFile(args, "utf-8", (error, data) => {
        if(error) throw Error(error);
                //? print (data.split('\n)[0])
                //? print(data.split('\n').at(0))
                //* print(data.split('\n).splice(0, 1).join('')) 
                    //* ⬆️ Se pued usar con -n para empezar de abajo hacia arriba
        let lines = data.split("\n");  //! "\n" === <br/>
        print(lines[0]);
    })
}

const tail = (print, args) => {
    fs.readFile(args, "utf-8", (error, data) => {
        if(error) throw Error(error);
            //* print (data.split('\n').at(-1).trim())
        let lines = data.split("\n");  //! "\n" === <br/>
        print(lines.pop().trim());     //! .pop() Devuelve el ultimo line.
    })                                 //! .trim() Saca los espacios al final y al principio del string.
}

const curl = (print, args) => {
    //console.log(typeof args);
    utils.request(args, (error, response) => {
          //! args es un array y con .join lo convierto a string
        if(error) throw Error(error);
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
