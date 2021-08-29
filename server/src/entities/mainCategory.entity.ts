import { Entity, Column, OneToMany } from 'typeorm';
import { InitEntity } from './base.entity';

import { SubCategory } from './subCategory.entity';

@Entity('main_category')
export class MainCategory extends InitEntity {
  @Column()
  title: string;

  @OneToMany(() => SubCategory, (type) => type.id)
  subCategory!: SubCategory[];
}
