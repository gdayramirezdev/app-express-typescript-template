import express, { Request, Response } from 'express';

const MainRouter = express.Router();


MainRouter.get('/', (_: Request, res: Response) => {
  res.json({
    message: 'Main Router Is Ready',
  });
});

export default MainRouter;
