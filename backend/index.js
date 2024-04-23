import { todo } from './db.js';
import { createTodo,updateTodo } from './types';
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res) => {
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return
    }
    // put data in mongoDB
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    });
    res.json({
        msg: "Todo Created"
    });
});

app.get('/todos', async(req, res) => {
    const todos = await todo.find();
    console.log(todos);
    res.json({
        todos
    });
});

app.put('/completed',async(req,res) => {
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return
    }
    await todo.updateOne({
        _id: updatePayLoad.id
    },{
        completed: true
    });
    res.json({
        msg: "Todo Marked as complete"
    });
});

app.listen(3000);