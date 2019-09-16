const express = require('express');
const router = express.Router();
const Stock = require('../models/stockModel');
//!Post
router.post('/', async (req, res) => {
    const Libro = new Stock({
        Titulo: req.body.Title,
        Autor: req.body.Autor,
        Editorial: req.body.Editorial,
        ISBN: req.body.ISBN,
        Categoria: req.body.Categoria,
        NumeroDePaginas: req.body.NumeroDePaginas,
        Sipnosis: req.body.Sipnosis,
        Precio: req.body.Precio,
        Formato: req.body.Formato,
        img: req.body.img,
    })
    console.log(Libro);
    try {
        const LibrosSave = await Libro.save();
        res.json({
            LibrosSave
        });
        console.log("In library");
    } catch (err) {
        res.json({
            message: err
        });
    }

})

//!Look Up
router.get('/', async (req, res) => {
    try {
        const Libros = await Stock.find();
        res.json(Libros)
    } catch (err) {
        res.json({
            message: err
        });
    }
})



//Ver la existencia
//Cargar un libro
//Buscar un libro en especifico
router.get('/:LibroId', async (req, res) => {
    try {
        const Libro = await Stock.findById(req.params.LibroId);
        res.json(Libro)
    } catch (err) {
        res.json({
            message: err
        })
    }
})
//Borrar un libro
router.delete('/:LibroId', async (req, res) => {
    try {
        const removerLibro = await Stock.remove({
            _id: req.params.LibroId
        })
        res.json(removerLibro)
    } catch (err) {
        res.json({
            message: err
        })
    }
})
//Actualizar un libro
router.patch('/:LibroId', async (req, res) => {
    const {
        Titulo,
        Autor,
        Editorial,
        ISBN,
        Categoria,
        NumeroDePaginas,
        Sipnosis,
        Precio,
        Formato,
        img,
    } = req.body;
    try {
        const actualizarLibro = await Stock.updateOne({
            _id: req.params.LibroId
        }, {
            $set: {
                Titulo,
                Autor,
                Editorial,
                ISBN,
                Categoria,
                NumeroDePaginas,
                Sipnosis,
                Precio,
                Formato,
                img,
            }
        });
        res.json(actualizarLibro)
    } catch (error) {
        res.json({
            message: err
        })
    }
})



module.exports = router;

module.exports = router;