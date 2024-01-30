import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TestPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);
    if (Number.isNaN(parseInt(value))) {
      throw new BadRequestException('num传的不对')
    }
    return value;
  }
}
