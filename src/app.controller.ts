/*
 * @Author: zhengduo
 * @Date: 2024-01-29 09:07:47
 * @LastEditors: zhengduo
 * @LastEditTime: 2024-01-30 14:02:22
 * @Description: file content
 */
import { Controller, Get, Inject, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject('cat')
  private readonly cat: { name: string, age: number }

  @Inject('dog')
  private readonly dog: { name: string, age: number } 

  @Get()
  @Redirect()
  getHello() {
    console.log(this.dog);
    // return this.appService.getHello();
    return {
      url: 'https://www.baidu.com',
      statusCode: 302
    }
  }
}
