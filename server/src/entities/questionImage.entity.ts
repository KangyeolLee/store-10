import {
  Entity,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { InitEntity } from './base.entity';

import { Question } from './question.entity';

@Entity('question_image')
export class QuestionImage extends InitEntity {
  @Column({ type: 'text' })
  url: string;

  @ManyToOne(() => Question, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'question_id' })
  question!: Question;
}
