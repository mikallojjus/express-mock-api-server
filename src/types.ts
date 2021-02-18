import { Request, Response, NextFunction } from 'express'

export type ApiRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => unknown
