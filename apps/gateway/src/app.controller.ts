import { Controller, Get, Inject, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { getConfig } from '@app/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('SYSTEM_SERVICE') private sysClient: ClientProxy,
  ) {}

  @HttpCode(200)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getMessageFromSystem(): Observable<any> {
    return this.sysClient.send('getTest', {});
  }
}
