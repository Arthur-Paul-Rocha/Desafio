// src/libros/dto/crear-libro.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CrearLibroDto {
  @ApiProperty({ description: 'Título del libro' })
  titulo: string;

  @ApiProperty({ description: 'Categoría literaria del libro' })
  categoriaLiteraria: string;

  @ApiProperty({ description: 'Precio del libro' })
  precio: number;

  @ApiProperty({ description: 'Fecha de lanzamiento del libro en formato DD/MM/AAAA o DD/MM/AA', example: '01/01/2023' })
  fechaLanzamiento: string;

  @ApiProperty({ description: 'Descripción del libro' })
  descripcion: string;

  @ApiProperty({ description: 'Array de IDs de los autores del libro', type: [Number] })
  autores: number[];

  @ApiProperty({ description: 'ID de la editorial del libro' })
  editorial: number;
}
