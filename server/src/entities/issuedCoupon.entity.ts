import { Entity, Column } from 'typeorm';
import { InitEntity } from './base.entity';

@Entity('issued_coupon')
export class IssuedCoupon extends InitEntity {
  @Column()
  code: string;

  @Column({ nullable: true })
  user_id?: number;

  @Column()
  coupon_id: number;
}
