import { Request, Response } from 'express';
import ApiResponse from '@/api/middlewares/response-format';
import HttpStatusCode from '@/types/statusCode';
import config from '@/config';
import adminService from '@/services/admin.service';

class AdminController {
  async generateCoupon(req: Request, res: Response) {
    const { password, couponId, user_id } = req.body;

    //TODO: 이것은 임시 어드민 체크
    if (config.ADMIN_PASSWORD !== password) {
      return ApiResponse(res, HttpStatusCode.UNAUTHORIZED, '어림 없지!');
    }
    const coupon = await adminService.generateCoupon(couponId, user_id);
    if (!coupon) {
      return ApiResponse(res, HttpStatusCode.UNAUTHORIZED, '어림 없지 2!');
    }
    ApiResponse(res, HttpStatusCode.OK, '성공!', { coupon });
  }
}

export default new AdminController();
