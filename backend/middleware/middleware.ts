import { Request, Response, NextFunction } from 'express';

const requestLoggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const currentDate = new Date();
    console.log(`[${currentDate.toISOString()}] ${req.method} ${req.url}`);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export { requestLoggerMiddleware };
