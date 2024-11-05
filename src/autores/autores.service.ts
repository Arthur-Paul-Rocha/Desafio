import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearAutorDto } from './dto/crear-autor.dto';
import { Autor } from './autor.entity';

@Injectable()
export class AutoresService {
  constructor(
    @InjectRepository(Autor)
    private readonly autoresRepository: Repository<Autor>,
  ) {}

  async crearAutor(crearAutorDto: CrearAutorDto): Promise<Autor> {
    const autor = this.autoresRepository.create(crearAutorDto);
    return await this.autoresRepository.save(autor);
  }

  async obtenerAutores(): Promise<Autor[]> {
    return await this.autoresRepository.find();
  }

  async obtenerAutor(id: number): Promise<Autor> {
    return await this.autoresRepository.findOne({ where: { id } });
  }
}
