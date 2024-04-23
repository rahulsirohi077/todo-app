const z = require('zod');

const todoSchema = z.object({
    title: z.string(),
    description: z.string()
});

const updateTodo = z.object({
    id: z.string(),
})

module.exports={
    createTodo,
    updateTodo
}