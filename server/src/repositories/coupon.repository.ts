import { Coupon } from '@/entities/coupon.entity';
import { EntityRepository, getCustomRepository, In, Repository } from 'typeorm';

@EntityRepository(Coupon)
class CouponRespository extends Repository<Coupon> {
  async getCouponsByIds(ids: number[]) {
    return await this.find({
      where: { id: In(ids) },
    });
  }

  async getCoupon(id: number) {
    return await this.findOne({ where: { id } });
  }
}

export default () => getCustomRepository(CouponRespository);
