import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { LoginGuard } from './login.guard';
import * as session from 'express-session'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('public', {
    prefix: '/static'
  })
  // 全局导航守卫
  // app.useGlobalGuards(new LoginGuard)
  app.use(session({
    secret: 'ni_shi_bu_shi_sha',
    cookie: {
      maxAge: 10000
    }
  }))
  await app.listen(3000);
}
bootstrap();
