/* 
* Todo {
    title: string;
    description: string;
    completed: boolean
}
*/


const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:XdmEYDUkTEWgYlXQ@rahulsirohi077.nu459q3.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todo', todoSchema);


module.exports = {
    todo
}