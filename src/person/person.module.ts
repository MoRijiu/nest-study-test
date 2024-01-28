import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { OtherModule } from 'src/other/other.module';
import { OtherService } from 'src/other/other.service';

@Module({
  imports: [OtherModule],
  controllers: [PersonController],
  providers: [PersonService],
  // providers: [PersonService, OtherService],
})
export class PersonModule {}
