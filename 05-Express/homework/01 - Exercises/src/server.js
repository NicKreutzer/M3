
const express = require("express");

let publications = [];

const server = express();

server.use(express.json());

let id = 1;

server.post('/posts', (req, res) => {
    const {author, title, contents} = req.body;

    // if(!author || !title || !contents){
    //     return res.status(400).json({error: "No se recibieron los parámetros necesarios para crear la publicación"})
    // }
    if(author && title && contents){
        const publication = {
            author,
            title,
            contents,
            id: id++
        }
        publications.push(publication);
        res.status(200).json(publication)
    } else{
        return res.status(400).json(
            {error: "No se recibieron los parámetros necesarios para crear la publicación"})
    }
})

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
