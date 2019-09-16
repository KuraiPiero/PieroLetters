const mongoose = require('mongoose');
const stockSchema = mongoose.Schema({
    Titulo: String,
    Autor: String,
    Editorial: String,
    ISBN: Number,
    Categoria: String,
    NumeroDePaginas: Number,
    Sipnosis: String,
    Precio: Number,
    Formato: String,
    img: String,
});

module.exports = mongoose.model('stock', stockSchema);