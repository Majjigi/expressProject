import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({limit: '32kb'}));
app.use(express.urlencoded({ extended: true,limit: '32kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// Additional route and middleware setups can be added here
import userRouter from './routes/userRoutes.js';

// router declarations
app.use('/api/users', userRouter);

export default app;