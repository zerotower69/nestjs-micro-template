import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getConfig } from '@app/config';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SYSTEM_SERVICE',
        //TODO:后期考虑使用RPC的方式调用微服务
        transport: Transport.TCP,
        options: {
          port: getConfig('services.system.port') as number,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
