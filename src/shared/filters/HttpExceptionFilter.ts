import { 
   ArgumentsHost, 
   Catch, 
   ExceptionFilter, 
   HttpStatus, 
   HttpException 
} from "@nestjs/common";


@Catch()
export class HttpExceptionFilter implements ExceptionFilter
{
   catch(exception: unknown, host: ArgumentsHost) {
      const context = host.switchToHttp();
      const request = context.getRequest();
      const response = context.getResponse();

      let status;
      let error;

      if (exception instanceof HttpException) {
         status = exception.getStatus();
         error = exception.getResponse();
      }
      else {
         status = HttpStatus.INTERNAL_SERVER_ERROR;
         error = exception;
      }

      response.status(status).json({
         timastamp: new Date().toISOString(),
         error
      });
   }
}
