import { Entity, Column } from 'typeorm';
import { InitEntity } from './base.entity';

@Entity('notice')
export class Notice extends InitEntity {
  @Column({ length: 100 })
  title: string;

  @Column({ type: 'text' })
  content: number;
}
