// editorial.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Libro } from '../libros/libro.entity';

@Entity()
export class Editorial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Libro, (libro) => libro.editorial)
  libros: Libro[];
}
