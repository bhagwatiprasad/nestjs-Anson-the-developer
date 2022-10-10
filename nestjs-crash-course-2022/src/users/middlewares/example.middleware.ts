import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  // below will run fine and no issue in req, res and next function
  //   use(req: any, res: any, next: () => void) {
  //     console.log('Example Middleware : ', req.headers);
  //     next();
  //   }

  use(req: Request, res: Response, next:NextFunction) {
    // console.log('Example Middleware : ', req.headers);
    console.log('Example Middleware.')
    const { authorization } = req.headers;
    if (!authorization) {
     throw new HttpException(
        'No Authorization Token : ',
        HttpStatus.FORBIDDEN
      );
    }

    if (authorization === '12345678') next();
    else if(false) {
      throw new HttpException(
        'Invalid Auth Token',
        HttpStatus.FORBIDDEN
      )
    }
    // next();
  }
}
