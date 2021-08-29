import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

import { Product } from './product.entity';
import { Address } from './address.entity';
import { User } from './user.entity';
import { InitEntity } from './base.entity';

@Entity('order')
export class Order extends InitEntity {
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({ nullable: true })
  deliveredAt: Date;

  @OneToMany(() => User, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;
  @Column()
  user_id!: number;

  @ManyToMany(() => Product, (Product) => Product.order)
  @JoinTable({
    name: 'order_product',
    joinColumn: {
      name: 'order_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
  })
  products: Product[];

  @OneToMany(() => Address, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'address_id' })
  address: Address;
  @Column({ nullable: true })
  address_id: number;

  @Column()
  status: string;

  @Column({ nullable: true })
  delivery_request_message: string;

  @Column({ nullable: true })
  payment_id: number;

  @Column({ nullable: true })
  user_coupon_id: number;
}
