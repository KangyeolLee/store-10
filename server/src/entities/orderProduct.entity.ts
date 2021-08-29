import { Entity, Column, PrimaryColumn } from 'typeorm';
import { DateEntity } from './base.entity';

@Entity('order_product')
export class OrderProduct extends DateEntity {
  @Column()
  count: number;

  @Column()
  @PrimaryColumn()
  order_id: number;

  @Column()
  @PrimaryColumn()
  product_id: number;
}
