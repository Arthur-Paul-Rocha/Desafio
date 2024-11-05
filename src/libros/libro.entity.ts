import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Autor } from '../autores/autor.entity';
import { Editorial } from '../editoriales/editorial.entity';

@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Autor, (autor) => autor.libros, { eager: true })
  autores: Autor[];

  @ManyToOne(() => Editorial, (editorial) => editorial.libros, { eager: true })
  editorial: Editorial;

  @Column()
  titulo: string;

  @Column()
  categoria_literaria: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'date' })
  fecha_lanzamiento: Date;

  @Column({ type: 'text' })
  descripcion: string;
}
