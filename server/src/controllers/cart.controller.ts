import CartService from '@/services/cart.service';
import { Request, Response } from 'express';
import HttpStatusCode from '@/types/statusCode';
import ApiResponse from '@/api/middlewares/response-format';

// TODO: 미들웨어 붙이면 테스트 userId 삭제
class CartController {
  async createOrUpdateCart(req: Request, res: Response) {
    const { productId, count } = req.body;
    const userId = req.user?.id;
    await CartService.createOrUpdateCart({ productId, userId, count });

    ApiResponse(res, HttpStatusCode.NO_CONTENT, '장바구니 추가 성공');
  }

  async getCarts(req: Request, res: Response) {
    const userId = req.user?.id;
    const carts = await CartService.getCarts(userId);

    ApiResponse(res, HttpStatusCode.OK, '해당 상품 조회 성공', carts);
  }

  async deleteCart(req: Request, res: Response) {
    const { productIds } = req.query;
    const userId = req.user?.id;
    await CartService.deleteCart({
      userId,
      productIds: JSON.parse(productIds as string),
    });

    ApiResponse(res, HttpStatusCode.NO_CONTENT, '장바구니 삭제 성공');
  }
}

export default new CartController();
