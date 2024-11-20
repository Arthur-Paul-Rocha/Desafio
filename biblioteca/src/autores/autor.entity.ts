import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Libro } from '../libros/libro.entity';

@Entity()
export class Autor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  dni: string;

  @Column()
  nacionalidad: string;

  @OneToMany(() => Libro, libro => libro.autores)
  libros: Libro[];
}
