import { Entity, Column, ManyToMany } from 'typeorm';
import { InitEntity } from './base.entity';
import { User } from './user.entity';

@Entity()
export class Coupon extends InitEntity {
  @Column()
  name: string;

  @Column()
  amount: number;

  @ManyToMany(() => User, (type) => type.id)
  user!: User[];
}
