import { ArgumentMetadata, HttpException, HttpStatus , Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUserDto.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  // transform(value: any, metadata: ArgumentMetadata) {  
  //   console.log("---------------------------")
  //   console.log('Inside ValidateCreateUserPipe!');
  //   console.log(value);
  //   console.log(metadata);
  //   console.log("---------------------------")
  //   return value;
  // }

  transform(value: CreateUserDto , metadata: ArgumentMetadata) {   // value: any or   CreateUserDto is just for intellisense
    console.log("---------------------------")
    console.log('Inside ValidateCreateUserPipe!');
    console.log(value);
    console.log(metadata);
    console.log("---------------------------");

    const parseAgeToInt =  parseInt(value.age.toString());
    if(isNaN(parseAgeToInt)){
      console.log(`${value.age} is not a number!`);
      throw new HttpException(
        'Invalid Data Types for property age. Expected Number' ,
        HttpStatus.BAD_REQUEST
      );
    }
    console.log(`${parseAgeToInt} is a number. Returning ....`);
    return {...value , age: parseAgeToInt};
  }
}
