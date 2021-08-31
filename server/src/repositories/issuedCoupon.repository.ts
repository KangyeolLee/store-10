import { IssuedCoupon } from '@/entities/issuedCoupon.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

interface IIssuedCoupon {
  coupon_id: number;
  user_id: number;
  code: string;
}

@EntityRepository(IssuedCoupon)
class IssuedCouponRespository extends Repository<IssuedCoupon> {
  async createIssuedCoupon(issuedCoupon) {
    const coupon = this.create(issuedCoupon);

    return await this.save(coupon);
  }

  async findIssuedCoupon(issuedCoupon: Partial<IIssuedCoupon>) {
    return this.findOne({ where: issuedCoupon });
  }
}

export default () => getCustomRepository(IssuedCouponRespository);
