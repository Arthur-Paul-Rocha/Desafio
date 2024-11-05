import { Controller, Get, Post, Body, Param, NotFoundException, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AutoresService } from './autores.service';
import { CrearAutorDto } from './dto/crear-autor.dto';
import { Autor } from './autor.entity';

@ApiTags('autores')
@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear un nuevo autor' })
  @ApiResponse({ status: 201, description: 'Autor creado', type: Autor })
  async crearAutor(@Body() crearAutorDto: CrearAutorDto): Promise<Autor> {
    return await this.autoresService.crearAutor(crearAutorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los autores' })
  @ApiResponse({ status: 200, description: 'Lista de autores', type: [Autor] })
  async obtenerAutores(): Promise<Autor[]> {
    return await this.autoresService.obtenerAutores();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un autor por ID' })
  @ApiResponse({ status: 200, description: 'Autor encontrado', type: Autor })
  async obtenerAutor(@Param('id') id: number): Promise<Autor> {
    const autor = await this.autoresService.obtenerAutor(id);
    if (!autor) {
      throw new NotFoundException(`Autor con ID ${id} no encontrado`);
    }
    return autor;
  }
}
