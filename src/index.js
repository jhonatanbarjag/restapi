import express from 'express';
import { connectDB } from './config/db.js';

const app = express();

const port = 3004;

connectDB();


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
