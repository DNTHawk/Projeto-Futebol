const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const authConfig = require('../../config/auth')

const Usuario = require('../models/Usuario');

const router = express.Router();

function generateToken(params = {}){
    return token = jwt.sign(params, authConfig.secret, { expiresIn: 86400} )
}

router.post('/cadastrar', async (req, res) => {
    const {email } = req.body;

    try {
        if (await Usuario.findOne({ email }))
            return res.status(400).send({ error : 'Usuario já existe' })

        const usuario = await Usuario.create(req.body);

        usuario.password = undefined;

        return res.send({ 
            usuario,
            token: generateToken({ id: usuario.id }),
        });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro' });
    }
});

router.post('/autenticar', async (req, res) => {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ email }).select('+password');

    if(!usuario)
        return res.status(400).send({ error: 'Usuario não encontrado' });

    if(!await bcrypt.compare(password, usuario.password))
        return res.status(400).send({ error: 'Senha Invalida' })

    usuario.password = undefined;

    res.send({ 
        usuario, 
        token: generateToken({ id: usuario.id }),
    });
})


module.exports = app => app.use('/usuario', router);