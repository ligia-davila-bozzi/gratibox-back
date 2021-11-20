import express from 'express';
import cors from 'cors';
import SignUp from './Controllers/SignUp.js';
import SignIn from './Controllers/SignIn.js';
import getPlans from './Controllers/Plan.js';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/sign-up', SignUp);
app.post('/sign-in', SignIn);

app.get('/plans', getPlans);

export default app;
