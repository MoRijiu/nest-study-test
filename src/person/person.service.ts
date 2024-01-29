import { Inject, Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { OtherService } from 'src/other/other.service';
import { AaaService } from 'src/aaa/aaa.service';

@Injectable()
export class PersonService {

  @Inject(OtherService)
  private otherService: OtherService;

  @Inject(AaaService)
  private aaaService: AaaService;

  testOther() {
    return this.otherService.test() + this.aaaService.findAll() + '111';
  }

  // create(createPersonDto: CreatePersonDto) {
  //   return 'This action adds a new person';
  // }

  // findAll() {
  //   return `This action returns all person`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} person`;
  // }

  // update(id: number, updatePersonDto: UpdatePersonDto) {
  //   return `This action updates a #${id} person`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} person`;
  // }
}
