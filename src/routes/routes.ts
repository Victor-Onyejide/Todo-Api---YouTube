import { Router } from "express";
const router = Router ();

const {getList,
    createTodo,
    updateList,
    deleteTodo}= require ('../controllers/todo');

    router.route('/').get(getList).post(createTodo);
    router.route('/:id').patch(updateList).delete(deleteTodo);

    module.exports = router;