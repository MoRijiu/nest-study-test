/*
 * @Author: zhengduo
 * @Date: 2024-01-29 09:07:47
 * @LastEditors: zhengduo
 * @LastEditTime: 2024-01-29 10:04:58
 * @Description: file content
 */
import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject('cat')
  private readonly cat: { name: string, age: number }

  @Inject('dog')
  private readonly dog: { name: string, age: number } 

  @Get()
  getHello(): string {
    console.log(this.dog);
    return this.appService.getHello();
  }
}
