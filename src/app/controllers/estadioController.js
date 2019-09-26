const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Estadio = require('../models/Estadio');

const router = express.Router();

router.use(authMiddleware);

router.post('/cadastrar', async (req, res) => {
    try{
        const estadio = await Estadio.create(req.body);

        return res.send({ estadio });
    } catch (err){
        return res.status(400).send({ error: 'Erro ao cadastrar o Estadio' });
    }
});

router.get('/selectAll', async (req, res) =>{
    try{
        const estadios = await Estadio.find()
        
        return res.send({ estadios });
    } catch (err){
        return res.status(400).send({ error: 'Erro ao carregar os Estadios' });
    }
})

router.get('/selectById/:estadioId', async (req, res) => {
    try{
        const estadio = await Estadio.findById(req.params.estadioId);
        
        return res.send({ estadio });
    } catch (err){
        return res.status(400).send({ error: 'Erro ao carregar o Estadio' });
    }
})

router.delete('/deleteById/:estadioId', async (req, res) => {
    try{
        await Estadio.findByIdAndRemove(req.params.estadioId);
        
        return res.send();
    } catch (err){
        return res.status(400).send({ error: 'Erro ao remover o Estadio' });
    }
})

module.exports = app => app.use('/estadio', router);