import jwt from 'jsonwebtoken';
// import UserRepository from '../repositories/user.repository';
import config from '../config';

class JwtService {
  generate<T extends object>(user: T) {
    return jwt.sign({ user }, config.JWT_SECRET, {
      expiresIn: '1d',
    });
  }

  verify(token: string) {
    try {
      return jwt.verify(token, config.JWT_SECRET);
    } catch (error) {
      return null;
    }
  }

  refresh() {
    // refresh token 발급
    return jwt.sign({}, config.JWT_SECRET, {
      expiresIn: '7d',
    });
  }

  generateCoupon<T extends object>(coupon: T) {
    return jwt.sign(coupon, config.JWT_SECRET);
  }
}

export default new JwtService();
