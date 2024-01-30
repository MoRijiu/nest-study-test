/*
 * @Author: zhengduo
 * @Date: 2024-01-30 10:42:57
 * @LastEditors: zhengduo
 * @LastEditTime: 2024-01-30 10:47:45
 * @Description: file content
 */
import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class TestFilter<T> implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse()

    response.status(400).json({
      statusCode: 40001,
      message: 'test: ' + exception.message
    })
  }
}
