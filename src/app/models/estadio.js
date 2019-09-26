const mongoose = require('../../database');

const EstadioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

const Estadio = mongoose.model('Estadio', EstadioSchema);

module.exports = Estadio;