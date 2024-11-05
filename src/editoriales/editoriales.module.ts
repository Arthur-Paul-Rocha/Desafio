import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EditorialesController } from './editoriales.controller';
import { EditorialesService } from './editoriales.service';
import { Editorial } from './editorial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Editorial])],
  controllers: [EditorialesController],
  providers: [EditorialesService],
})
export class EditorialesModule {}
