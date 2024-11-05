import { Controller, Get, Post, Body, Param, NotFoundException, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EditorialesService } from './editoriales.service';
import { CrearEditorialDto } from './dto/crear-editorial.dto';
import { Editorial } from './editorial.entity';

@ApiTags('editoriales')
@Controller('editoriales')
export class EditorialesController {
  constructor(private readonly editorialesService: EditorialesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear una nueva editorial' })
  @ApiResponse({ status: 201, description: 'Editorial creada', type: Editorial })
  async crearEditorial(@Body() crearEditorialDto: CrearEditorialDto): Promise<Editorial> {
    return await this.editorialesService.crearEditorial(crearEditorialDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las editoriales' })
  @ApiResponse({ status: 200, description: 'Lista de editoriales', type: [Editorial] })
  async obtenerEditoriales(): Promise<Editorial[]> {
    return await this.editorialesService.obtenerEditoriales();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una editorial por ID' })
  @ApiResponse({ status: 200, description: 'Editorial encontrada', type: Editorial })
  async obtenerEditorial(@Param('id') id: number): Promise<Editorial> {
    const editorial = await this.editorialesService.obtenerEditorial(id);
    if (!editorial) {
      throw new NotFoundException(`Editorial con ID ${id} no encontrada`);
    }
    return editorial;
  }
}
