import express from 'express';
const user = express.Router();
import type {user} from './../types.js';
user.post("/signin", async (req, res)=>{
    const {email, password} = req.body;

})
user.post("/signup", async (req, res)=>{
    const {name, username, email, password} = req.body;

})