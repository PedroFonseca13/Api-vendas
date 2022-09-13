import HttpException from '@shared/errors/http.exception';
import { NextFunction, Request, Response } from 'express';

const httpErrorMiddleware = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { status, message } = err as HttpException;
	res.status(status || 500).json({ message });
};

export default httpErrorMiddleware;
