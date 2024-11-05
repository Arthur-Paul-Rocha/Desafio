import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CrearAutorDto {
  @ApiProperty({ description: 'Nombre del autor' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Apellido del autor' })
  @IsString()
  @IsNotEmpty()
  apellido: string;

  @ApiProperty({ description: 'DNI del autor' })
  @IsString()
  @IsNotEmpty()
  dni: string;

  @ApiProperty({ description: 'Nacionalidad del autor' })
  @IsString()
  @IsNotEmpty()
  nacionalidad: string;
}
