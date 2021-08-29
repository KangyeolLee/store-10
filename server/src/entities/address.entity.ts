import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { InitEntity } from './base.entity';

import { User } from './user.entity';

@Entity('address')
export class Address extends InitEntity {
  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  postcode: string;

  @Column()
  detail_address: string;

  @Column()
  phone: string;

  @Column({ type: 'tinyint' })
  is_default: boolean;

  @ManyToOne(() => User, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;
  @Column()
  user_id: number;
}
