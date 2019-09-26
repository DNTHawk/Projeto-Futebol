const mongoose = require('../../database');

const TimeSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    estadio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estadio',
        require: true,
    },
    url_emblema: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

const Time = mongoose.model('Time', TimeSchema);

module.exports = Time;