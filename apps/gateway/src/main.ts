import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConfig } from '@app/config';
import consola from 'consola';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const Config = getConfig('services.gateway') || {};
  await app.listen(Config.port).then((res) => {
    consola.success('gateway start on : ' + Config.port + ' successfully!');
  });
}
bootstrap();

// console.log(getConfig('settings.services.gateway.port'));
