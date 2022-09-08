import express from 'express';
const todo = require ('./routes/routes');

const app = express ();
const PORT = 5001;

app.use(express.json())
app.use('/list', todo);

const start = () => {
    try {
        app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`));

    } catch (error) {
        console.log(error)
    }
}

start();