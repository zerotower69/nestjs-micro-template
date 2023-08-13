import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { getConfig, getSequelizeConfig } from '@app/config';
import { UserModel } from '@app/models';
const isDev = process.env.RUNNING_ENV === 'dev';
// const sqlConfig = getConfig('mysql');
// const modelConfig = getConfig('sequelize');
@Module({
  imports: [
    SequelizeModule.forRoot({
      ...getSequelizeConfig(isDev),
      models: [UserModel],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
