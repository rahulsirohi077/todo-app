const z = require('zod');

const todoSchema = z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty()
});

const updateTodo = z.object({
    id: z.string(),
})

module.exports={
    createTodo,
    updateTodo
}