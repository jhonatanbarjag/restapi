import express from 'express';
import { connectDB } from './config/db.js';
import userRoutes from './routes/user.routes.js';
import morgan from 'morgan';


const app = express();

const port = 3004;

connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", userRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
