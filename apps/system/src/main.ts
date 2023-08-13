import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import consola from 'consola';
import { AppModule } from './app.module';
import { getConfig } from '@app/config';

async function bootstrap() {
  const Config = getConfig('services.system') || {};
  // console.log(Config);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      //TODO:后期考虑使用rpc的方式调用微服务
      transport: Transport.TCP,
      options: {
        port: Config.port,
      },
    },
  );
  app.listen().then(() => {
    consola.success(
      'system service listen on: ' + Config.port + ' successfully!',
    );
  });
}
bootstrap();
