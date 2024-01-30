import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFiles, UsePipes, UseFilters, Res } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { TestPipe } from 'src/test.pipe';
import { TestFilter } from 'src/test.filter';
import type { Response } from 'express'

@Controller({
  path: 'api/person',
  // host: ':host.0.0.1'
})
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
  getIndex(@Res() res: Response) {
    res.end(JSON.stringify({
      age: 18,
      name: 'haha'
    }))
    // return this.personService.testOther()
  }

  @Get('find')
  query(
    @Query('name') name: string, 
    @Query('age') age: number) {
      return `get name=${name}, age=${age}`
  }

  @Get('test')
  @UsePipes(TestPipe)
  @UseFilters(TestFilter)
  testException(@Query('num') num: number) {
    return `hi!${num}`
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
