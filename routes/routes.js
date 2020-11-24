import express from 'express';
import {catchErrors} from '../helpers.js';
import { getPost, getTest } from '../controllers/emailControllers.js';

const router = express.Router();

// const cors = require('cors');
// app.use(cors());

router.get('/',(req, res)=>{
    res.send('Hello Redouane Amrani')
});

router.get('/test',catchErrors(getTest));

router.post('/mail',catchErrors(getPost));

export default router;