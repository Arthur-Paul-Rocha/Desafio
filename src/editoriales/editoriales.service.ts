import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearEditorialDto } from './dto/crear-editorial.dto';
import { Editorial } from './editorial.entity';

@Injectable()
export class EditorialesService {
  constructor(
    @InjectRepository(Editorial)
    private readonly editorialesRepository: Repository<Editorial>,
  ) {}

  async crearEditorial(crearEditorialDto: CrearEditorialDto): Promise<Editorial> {
    const editorial = this.editorialesRepository.create(crearEditorialDto);
    return await this.editorialesRepository.save(editorial);
  }

  async obtenerEditoriales(): Promise<Editorial[]> {
    return await this.editorialesRepository.find();
  }

  async obtenerEditorial(id: number): Promise<Editorial> {
    return await this.editorialesRepository.findOne({ where: { id } });
  }
}
