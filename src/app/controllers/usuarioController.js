const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Usuario = require('../models/Usuario');

const router = express.Router();

router.use(authMiddleware);

router.get('/selectAll', async (req, res) =>{
    try{
        const usuarios = await Usuario.find()
        
        return res.send({ usuarios });
    } catch (err){
        return res.status(400).send({ error: 'Erro ao carregar Usuarios' });
    }
})

router.get('/selectById/:usuarioId', async (req, res) => {
    try{
        const usuario = await Usuario.findById(req.params.usuarioId);
        
        return res.send({ usuario });
    } catch (err){
        return res.status(400).send({ error: 'Erro ao carregar o Usuario' });
    }
})

router.delete('/deleteById/:usuarioId', async (req, res) => {
    try{
        await Usuario.findByIdAndRemove(req.params.usuarioId);
        
        return res.send();
    } catch (err){
        return res.status(400).send({ error: 'Erro ao remover o usuario' });
    }
})

module.exports = app => app.use('/usuario', router);