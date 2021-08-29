import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Question } from './question.entity';
import { Bookmark } from './bookmark.entity';
import { Cart } from './cart.entity';
import { ProductImage } from './productImage.entity';
import { Order } from './order.entity';
import { Review } from './review.entity';
import { SubCategory } from './subCategory.entity';
import { InitEntity } from './base.entity';

@Entity('product')
export class Product extends InitEntity {
  @Column()
  title: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'json' })
  content: string;

  @Column()
  stock: number;

  @Column({ type: 'float', default: 0 })
  discount: number;

  @ManyToOne(() => SubCategory, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'sub_category_id' })
  subCategory!: SubCategory;

  @Column()
  sub_category_id: number;

  @OneToMany(() => Bookmark, (type) => type.product)
  bookmark!: Bookmark[];

  @OneToMany(() => ProductImage, (type) => type.product)
  productImage!: ProductImage[];

  @ManyToMany(() => Order, (type) => type.id)
  order!: Order[];

  @OneToMany(() => Cart, (type) => type.product)
  cart!: Cart[];

  @OneToMany(() => Review, (type) => type.id)
  review!: Review[];

  @OneToMany(() => Question, (type) => type.id)
  question!: Question[];
}
