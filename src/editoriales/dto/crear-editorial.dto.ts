import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CrearEditorialDto {
  @ApiProperty({ description: 'Nombre de la editorial' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Dirección de la editorial' })
  @IsString()
  @IsNotEmpty()
  direccion: string;

  @ApiProperty({ description: 'CUIT de la editorial' })
  @IsString()
  @IsNotEmpty()
  cuit: string;
}
