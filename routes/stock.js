const express = require('express');
const router = express.Router();
const Stock = require('../models/stockModel');

//?Metodo Get
router.get('/', (req, res) => {
    res.send('Entering PieroLetters')
});

//?Metodo Post

router.post('/', async (req, res) => {
    const agregarLibros = Stock({
        Titulo: req.body.Titulo,
        Autor: req.body.Autor,
        Editorial: req.body.Editorial,
        ISBN: req.body.ISBN,
        Categoria: req.body.Categoria,
        NumeroDePaginas: req.body.NumeroDePaginas,
        Sipnosis: req.body.Sipnosis,
        Precio: req.body.Precio,
        Formato: req.body.Formato,
        img: req.body.img,
    });

    try {
        const salvarLibros = await agregarLibros.save()
        res.json(salvarLibros)
    } catch (error) {
        res.json({
            mesage: error
        });

    }


});

module.exports = router;