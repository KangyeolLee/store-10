import {
  Entity,
  Column,
  OneToMany,
  Unique,
  BeforeInsert,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Address } from './address.entity';
import bcrypt from 'bcrypt-nodejs';
import { Question } from './question.entity';
import { Bookmark } from './bookmark.entity';
import { Cart } from './cart.entity';
import { Order } from './order.entity';
import { Review } from './review.entity';
import { InitEntity } from './base.entity';
import { Coupon } from './coupon.entity';

@Entity()
@Unique(['user_id'])
@Unique(['refreshToken'])
export class User extends InitEntity {
  @Column({ name: 'user_id', length: '50' })
  user_id!: string;

  @Column({ nullable: true })
  password?: string;

  @Column()
  name!: string;

  @Column({ type: 'tinyint', default: false })
  is_oauth?: boolean;

  @Column({ nullable: true })
  refreshToken?: string;

  @OneToMany(() => Address, (type) => type.id)
  address?: Address[];

  @OneToMany(() => Question, (type) => type.id)
  question?: Question[];

  @OneToMany(() => Bookmark, (type) => type.user)
  bookmark?: Bookmark[];

  @OneToMany(() => Cart, (type) => type.user)
  cart?: Cart[];

  @OneToMany(() => Order, (type) => type.user)
  order?: Order[];

  @OneToMany(() => Review, (type) => type.id)
  review?: Review[];

  @BeforeInsert()
  async hashPassword?(): Promise<void> {
    try {
      if (!!this.password) {
        this.password = await bcrypt.hashSync(this.password);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  @ManyToMany(() => Coupon)
  @JoinTable({
    name: 'user_coupon',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'coupon_id',
      referencedColumnName: 'id',
    },
  })
  coupon?: Coupon[];
}
