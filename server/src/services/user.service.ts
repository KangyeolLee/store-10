import bcrypt from 'bcrypt-nodejs';
import { User } from '@/entities/user.entity';
import UserRepository from '@/repositories/user.repository';
import UserCouponRepository from '@/repositories/userCoupon.repository';
import CouponRepository from '@/repositories/coupon.repository';
import jwtService from './jwt.service';

interface ICouponJWT {
  serial_number: string;
  coupon_id: number;
  iat: number;
}

class UserService {
  async createUser(user: User) {
    const userRepo = UserRepository();
    const isUser = await userRepo.findUserById(user.user_id);
    const _user = isUser ? { ...isUser, ...user } : user;
    const createdUser = await userRepo.createUser(_user);
    const userCouponRepo = UserCouponRepository();

    await userCouponRepo.createUserCoupon({
      user_id: createdUser.id,
      coupon_id: 1,
      is_valid: true,
      serial_number: `1-${new Date().getTime()}`,
    });

    return createdUser;
  }

  async changeNickName(user: User, newNickName: string) {
    const userRepo = UserRepository();
    const foundUser = await userRepo.findUserById(user.user_id);
    if (foundUser) {
      return await userRepo.updateUserNickName(user, newNickName);
    }
    return null;
  }

  async changePassword(user: User, newPassword: string) {
    const userRepo = UserRepository();
    const foundUser = await userRepo.findUserById(user.user_id);
    const newHashPassword = await bcrypt.hashSync(newPassword);
    if (foundUser) {
      return await userRepo.updateUserPassword(user, newHashPassword);
    }
    return null;
  }

  async getCoupons(user_id: number, is_valid?: boolean) {
    const userCouponRepo = UserCouponRepository();
    const couponRepo = CouponRepository();

    const userCoupons = await userCouponRepo.getUserCoupons({
      user_id,
      is_valid,
    });
    const couponIds = userCoupons.map((userCoupon) => userCoupon.coupon_id);
    const coupons = await couponRepo.getCouponsByIds(couponIds);

    return userCoupons.map((userCoupon) => {
      const coupon = coupons.find(
        (coupon) => coupon.id === userCoupon.coupon_id
      );
      return {
        ...userCoupon,
        coupon_id: coupon.id,
        name: coupon.name,
        amount: coupon.amount,
      };
    });
  }

  async useCoupon({ id, user_id }) {
    const userCouponRepo = UserCouponRepository();
    const userCoupon = await userCouponRepo.getUserCoupon({ id, user_id });
    if (!userCoupon?.is_valid) {
      return null;
    }
    return await userCouponRepo.updateUserCoupon({
      user_id,
      id,
      is_valid: false,
    });
  }

  async registerCoupon({ couponToken, user_id }) {
    const userCouponRepo = UserCouponRepository();
    const couponRepo = CouponRepository();

    const coupon = <ICouponJWT>jwtService.verify(couponToken);

    if (!coupon) {
      return null;
    }

    const isAlreadyRegistered = await userCouponRepo.getUserCoupon({
      serial_number: coupon.serial_number,
    });

    if (isAlreadyRegistered) {
      return null;
    }

    const isCouponExist = await couponRepo.getCoupon(coupon.coupon_id);
    if (!isCouponExist) {
      return null;
    }

    return await userCouponRepo.createUserCoupon({
      user_id,
      coupon_id: coupon.coupon_id,
      is_valid: true,
      serial_number: coupon.serial_number,
    });
  }
}

export default new UserService();
