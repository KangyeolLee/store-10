import { Entity, Column } from 'typeorm';
import { InitEntity } from './base.entity';

@Entity('user_coupon')
export class UserCoupon extends InitEntity {
  @Column()
  is_valid: boolean;

  @Column()
  coupon_id: number;

  @Column()
  user_id: number;

  @Column()
  code: string;
}
