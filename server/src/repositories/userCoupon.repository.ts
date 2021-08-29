import { UserCoupon } from '@/entities/userCoupon.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

interface IUserCoupon {
  id: number;
  user_id: number;
  coupon_id: number;
  is_valid: boolean;
  serial_number: string;
}

@EntityRepository(UserCoupon)
class UserCouponRespository extends Repository<UserCoupon> {
  async getUserCoupons({
    user_id,
    is_valid,
  }: {
    user_id: number;
    is_valid?: boolean;
  }) {
    return await this.find({
      where: { user_id, ...(is_valid ? { is_valid } : {}) },
    });
  }

  async updateUserCoupon({ id, user_id, is_valid }: Partial<IUserCoupon>) {
    return await this.update({ id, user_id }, { is_valid });
  }

  async getUserCoupon(userCoupon: Partial<IUserCoupon>) {
    return await this.findOne({
      where: {
        ...userCoupon,
      },
    });
  }

  async createUserCoupon(userCouponData: Partial<IUserCoupon>) {
    const userCoupon = this.create(userCouponData);

    return await this.save(userCoupon);
  }
}

export default () => getCustomRepository(UserCouponRespository);
