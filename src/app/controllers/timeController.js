const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Time = require('../models/Time');

const router = express.Router();

router.use(authMiddleware);

router.post('/cadastrar', async (req, res) => {
    try{
        const time = await Time.create(req.body);

        return res.send({ time });
    } catch (err){
        return res.status(400).send({ error: 'Erro ao cadastrar o time' });
    }
});

router.get('/selectAll', async (req, res) =>{
    try{
        const times = await Time.find()
        
        return res.send({ times });
    } catch (err){
        return res.status(400).send({ error: 'Erro ao carregar os times' });
    }
})

router.get('/selectById/:timeId', async (req, res) => {
    try{
        const time = await Time.findById(req.params.timeId);
        
        return res.send({ time });
    } catch (err){
        return res.status(400).send({ error: 'Erro ao carregar o time' });
    }
})

router.delete('/deleteById/:timeId', async (req, res) => {
    try{
        await Time.findByIdAndRemove(req.params.timeId);
        
        return res.send();
    } catch (err){
        return res.status(400).send({ error: 'Erro ao remover o time' });
    }
})

module.exports = app => app.use('/time', router);