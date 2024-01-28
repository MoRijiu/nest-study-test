import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `get ${JSON.stringify(createPersonDto)}`
  }

  @Post('file')
  @UseInterceptors(AnyFilesInterceptor({
    dest: 'uploads/'
  }))
  body2(
    @Body() createPersonDto: CreatePersonDto, 
    @UploadedFiles() files: Array<Express.Multer.File>) {
      console.log(files);
      return `get ${JSON.stringify(createPersonDto)}`
  }

  @Get()
  getIndex() {
    return this.personService.testOther()
  }

  @Get('find')
  query(
    @Query('name') name: string, 
    @Query('age') age: number) {
      return `get name=${name}, age=${age}`
  }

  @Get(':id')
  urlParams(@Param('id') id: string) {
    return `get ${id}`
  }


  // @Post()
  // create(@Body() createPersonDto: CreatePersonDto) {
  //   return this.personService.create(createPersonDto);
  // }

  // @Get()
  // findAll() {
  //   return this.personService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.personService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
  //   return this.personService.update(+id, updatePersonDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.personService.remove(+id);
  // }
}
