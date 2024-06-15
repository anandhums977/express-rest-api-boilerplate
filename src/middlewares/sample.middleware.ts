import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'before' }) 
export class LoggingMiddleware implements ExpressMiddlewareInterface {
    use(req: any, res: any, next: (err?: any) => any): void {
        console.log('\x1b[38;5;2m',`${req.method} ${req.url}`,'\x1b[0m');
        next();
    }
}
