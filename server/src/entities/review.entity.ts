import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { User } from './user.entity';
import { Product } from './product.entity';
import { ReviewImage } from './reviewImage.entity';
import { InitEntity } from './base.entity';

@Entity()
export class Review extends InitEntity {
  @Column({ type: 'text' })
  content: number;

  @Column()
  rating: number;

  @OneToMany(() => ReviewImage, (type) => type.id)
  reviewImage?: ReviewImage[];

  @ManyToOne(() => User, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;
  @Column()
  user_id!: number;

  @ManyToOne(() => Product, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product!: Product;
  @Column()
  product_id!: number;
}
