import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserRole } from 'src/common/constants/constants';

export class CreateUserDto {
  @ApiProperty({
    example: 'user2@milkyway.com',
    description: 'User email',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'mypassword',
    description: 'User password',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'another john',
    description: 'just user name',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'credentials',
    description: 'User login type',
  })
  @IsNotEmpty()
  loginType: string;

  @ApiProperty({
    example: 'USER',
    description: 'User role',
  })
  @IsNotEmpty()
  role: string = UserRole.USER;
}
