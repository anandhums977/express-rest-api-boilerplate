import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import { Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';

@Service()
@Middleware({ type: 'before' }) 
export class LoggingMiddleware implements ExpressMiddlewareInterface {
    use(req: Request, res: Response, next: NextFunction): void {
        console.log('\x1b[38;5;2m',`${req.method} ${req.url}`,'\x1b[0m');
        next();
    }
}