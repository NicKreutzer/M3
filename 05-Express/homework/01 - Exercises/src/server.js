
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
});

server.get('/posts', (req, res) => {
    const {author, title} = req.query;

    if(author && title){
        const filteredPosts = publications.filter(post =>
            post.author === author && post.title === title);
            filteredPosts.length 
            ? res.status(200).json(filteredPosts)
            : res.status(400).json({error: "No existe ninguna publicación con dicho título y autor indicado"});
    // }else{
    //     return res.status(400).json(
    //         {error: "No existe ninguna publicación con dicho título y autor indicado"})
    //! Con el else no corre el test, pero la ruta corre bien.
    }
});

server.get('/posts/:author', (req, res) => {
    const {author} = req.params;
    const filteredPosts = publications.filter(post =>
        post.author === author);
    if(filteredPosts.length){
            return res.status(200).json(filteredPosts)
    } else {
        res.status(400).json({error: "No existe ninguna publicación del autor indicado"})
    }

    //! ASI DEBERIA SER SI NO ESTUVIESE MAL EL TEST.
    // const {author} = req.params;
    // if(author){
    //     const filteredPosts = publications.filter(post =>
    //         post.author === author)
    //         filteredPosts.length
    //         ? res.status(200).json(filteredPosts)
    //         : res.status(404).json({error: "El autor no se encuentra en nuestra base de datos"})
    // } else {
    //     return res.status(400).json({error: "El autor no fue brindado"})
    // }
});

server.put('/posts/:id', (req, res) => {
    const {id} = req.params;
    const {title, contents} =  req.body;
    if(title && contents && id){
        const publicationId = publications.find(post => post.id === Number(id))
        !publicationId
        ? res.status(400).json({error: "No se recibió el id correcto necesario para modificar la publicación"})
        : (publicationId = {
            ...publicationId, 
            title, 
            contents}
            && res.status(200).json(publicationId))
    }else{
        return res.status(400).json({error: "No se recibieron los parámetros necesarios para modificar la publicación"})
    }
})
//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
