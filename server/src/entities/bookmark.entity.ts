import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';

import { User } from './user.entity';
import { Product } from './product.entity';
import { DateEntity } from './base.entity';

@Entity('bookmark')
export class Bookmark extends DateEntity {
  @ManyToOne(() => User, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @ManyToOne(() => Product, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product!: Product;

  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  product_id: number;
}
