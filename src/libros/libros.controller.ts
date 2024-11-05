import { Controller, Get, Post, Body, Param, NotFoundException, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LibrosService } from './libros.service';
import { CrearLibroDto } from './dto/crear-libro.dto';
import { Libro } from './libro.entity';

@ApiTags('libros')
@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear un nuevo libro' })
  @ApiResponse({ status: 201, description: 'Libro creado', type: Libro })
  @ApiResponse({ status: 400, description: 'Error en los datos proporcionados' })
  async crearLibro(@Body() crearLibroDto: CrearLibroDto): Promise<Libro> {
    return await this.librosService.crearLibro(crearLibroDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los libros' })
  @ApiResponse({ status: 200, description: 'Lista de libros', type: [Libro] })
  async obtenerLibros(): Promise<Libro[]> {
    return await this.librosService.obtenerLibros();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un libro por ID' })
  @ApiResponse({ status: 200, description: 'Libro encontrado', type: Libro })
  @ApiResponse({ status: 404, description: 'Libro no encontrado' })
  async obtenerLibro(@Param('id') id: number): Promise<Libro> {
    const libro = await this.librosService.obtenerLibro(id);
    if (!libro) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }
    return libro;
  }
}
