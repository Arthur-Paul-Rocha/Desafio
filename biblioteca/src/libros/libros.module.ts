import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrosController } from './libros.controller';
import { LibrosService } from './libros.service';
import { Libro } from './libro.entity';
import { Autor } from '../autores/autor.entity';
import { Editorial } from '../editoriales/editorial.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Libro, Autor, Editorial]),
  ],
  controllers: [LibrosController],
  providers: [LibrosService],
})
export class LibrosModule {}
