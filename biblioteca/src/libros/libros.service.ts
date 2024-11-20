
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearLibroDto } from './dto/crear-libro.dto';
import { Libro } from './libro.entity';
import { Autor } from '../autores/autor.entity'; // tod esto para importar las entidades
import { Editorial } from '../editoriales/editorial.entity'; 

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private readonly librosRepository: Repository<Libro>,
    @InjectRepository(Autor) 
    private readonly autoresRepository: Repository<Autor>,
    @InjectRepository(Editorial) 
    private readonly editorialesRepository: Repository<Editorial>,
  ) {}

  async crearLibro(crearLibroDto: CrearLibroDto): Promise<Libro> {
    const libro = this.librosRepository.create({
      ...crearLibroDto,
      autores: await this.autoresRepository.findByIds(crearLibroDto.autores), 
      editorial: await this.editorialesRepository.findOne({ where: { id: crearLibroDto.editorial } }), 
    });
    return await this.librosRepository.save(libro);
  }

  async obtenerLibro(id: number): Promise<Libro> {
    return await this.librosRepository.findOne({
      where: { id }, // esto para especificar el objeto porque sino salta error(?  
      relations: ['autores', 'editorial'],
    });
  }

  async obtenerLibros(): Promise<Libro[]> {
    return await this.librosRepository.find({ relations: ['autores', 'editorial'] });
  }
}
