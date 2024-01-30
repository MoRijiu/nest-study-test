import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { OtherModule } from './other/other.module';
import { AaaModule } from './aaa/aaa.module';
import { APP_GUARD } from '@nestjs/core';
import { LoginGuard } from './login.guard';

@Module({
  imports: [PersonModule, OtherModule, AaaModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'cat',
      useValue: {
        name: 'mimi',
        age: 2
      }
    },
    {
      provide: 'dog',
      useFactory() {
        return {
          name: 'maomao',
          age: 6
        }
      }
    },
    // {
    //   // 全局guard
    //   provide: APP_GUARD,
    //   useClass: LoginGuard
    // }
  ],
})
export class AppModule {}
