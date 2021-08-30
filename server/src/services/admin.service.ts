import CouponRepository from '@/repositories/coupon.repository';
import IssuedCouponRepository from '@/repositories/issuedCoupon.repository';
import { randomUUID } from 'crypto';

class AdminService {
  async generateCoupon(coupon_id: number, user_id?: number) {
    const couponRepo = CouponRepository();
    const issuedCouponRepo = IssuedCouponRepository();

    const coupon = await couponRepo.getCoupon(coupon_id);

    if (!coupon) {
      return null;
    }

    const couponCode = randomUUID();

    await issuedCouponRepo.createIssuedCoupon({
      coupon_id,
      code: couponCode,
      ...(user_id ? { user_id } : {}),
    });

    return couponCode;
  }
}

export default new AdminService();
