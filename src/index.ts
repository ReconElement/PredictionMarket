import express from 'express';

let app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = 3000



app.listen(PORT,()=>{
    console.log(`Listening to port at ${PORT}`);
})