import { createTodo,updateTodo } from './types';
const express = require('express');
const app = express();

app.use(express.json());

app.post('/todo', (req, res) => {
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return
    }
    // put data in mongoDB
    
});

app.get('/todos', (req, res) => {
    res.send('Hello World!');
});

app.put('/completed',(req,res) => {
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return
    }
});

app.listen(3000);