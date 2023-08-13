import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('getTest')
  @HttpCode(200)
  @Get()
  getHello(): string {
    return 'get message from system sub app';
  }

  @HttpCode(200)
  @Get('/test')
  getAny() {
    return 'get any body';
  }
}
