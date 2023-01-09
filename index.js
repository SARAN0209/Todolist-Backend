require ('dotenv').config();
const express = require ('express');
const db = require ('./db/connect');
const cors = require('cors');
const Todolist = require('./route/Itemlistroute')

const app = express();
app.use(cors());

db();

app.get ('/',(req,res) =>{
    res.send('welcome saran')
});

app.use(express.json());

app.use('/',Todolist)

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}`)
});