import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv'; 

dotenv.config();

const app: Application = express();
const port = process.env.APP_PORT || 3000;

if (process.env.NODE_ENV === 'development') {
  /**
   * Development settings
   */
  console.log('development');
}

app.use('/', (req: Request, res: Response ) => {
    res.status(200).send({data: 'Express Ready'});
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));