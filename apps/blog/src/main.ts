import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      //TODO:后期考虑使用rpc的方式调用微服务
      transport: Transport.TCP,
      options: {
        port: 4001,
      },
    },
  );
  await app.listen();
}
bootstrap();
