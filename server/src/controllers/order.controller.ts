import OrderService from '@/services/order.service';
import { Request, Response } from 'express';
import HttpStatusCode from '@/types/statusCode';
import ApiResponse from '@/api/middlewares/response-format';

class OrderController {
  async createOrder(req: Request, res: Response) {
    const userId = req.user?.id;
    const { status, products, addressId, deliveryRequestMessage } = req.body;
    const result = await OrderService.createOrder({
      user_id: userId,
      status,
      products,
      address_id: addressId,
      delivery_request_message: deliveryRequestMessage,
    });

    if (result) {
      ApiResponse(res, HttpStatusCode.CREATED, '주문 추가 성공', result);
    } else {
      ApiResponse(res, HttpStatusCode.BAD_REQUEST, '주문 추가 실패');
    }
  }

  async getOrder(req: Request, res: Response) {
    const { id } = req.params;
    const userId = req.user?.id;

    const result = await OrderService.getOrder({
      user_id: userId,
      id,
    });

    if (result) {
      ApiResponse(res, HttpStatusCode.OK, '주문 조회 성공', result);
    } else {
      ApiResponse(res, HttpStatusCode.BAD_REQUEST, '주문 조회 실패');
    }
  }

  async getOrderByProductId(req: Request, res: Response) {
    const { product_id } = req.params;
    const user_id = req.user.id;

    const result = await OrderService.getOrderByProductId(product_id, user_id);

    if (result) {
      ApiResponse(res, HttpStatusCode.OK, '조회성공', { ordered: true });
    } else {
      ApiResponse(res, HttpStatusCode.OK, '조회성공', { ordered: false });
    }
  }

  async getOrders(req: Request, res: Response) {
    const { month_ago, year } = req.query;
    const userId = req.user?.id;
    const result = await OrderService.getOrders({
      user_id: userId,
      year,
    });

    ApiResponse(res, HttpStatusCode.OK, '주문 조회 성공', result);
  }

  async updateOrder(req: Request, res: Response) {
    const { order, updateDefaultAddress } = req.body;
    const userId = req.user?.id;
    const result = await OrderService.updateOrder({
      user_id: userId,
      order,
      updateDefaultAddress,
    });

    if (result?.affected >= 1) {
      ApiResponse(res, HttpStatusCode.OK, '주문 업데이트 성공', {
        id: order.id,
      });
    } else {
      ApiResponse(
        res,
        HttpStatusCode.BAD_REQUEST,
        '주문 업데이트 실패',
        result
      );
    }
  }
}

export default new OrderController();
