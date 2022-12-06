import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'main-site'),
      serveRoot: '/',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'storybook', 'main-site'),
      serveRoot: '/storybook',
      renderPath: '/storybook'
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
