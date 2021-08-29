import AddressService from '@/services/address.service';
import { Request, Response } from 'express';
import ApiResponse from '@/api/middlewares/response-format';
import HttpStatusCode from '@/types/statusCode';

class AddressController {
  async getAddreses(req: Request, res: Response) {
    const userId = req.user?.id;
    const result = await AddressService.getAddresses(userId);

    return ApiResponse(res, HttpStatusCode.OK, '성공!', result);
  }

  async deleteAddress(req: Request, res: Response) {
    const { id } = req.params;
    const userId = req.user?.id;
    const result = await AddressService.deleteAddress({ id, userId });

    if (result?.affected >= 1) {
      ApiResponse(res, HttpStatusCode.NO_CONTENT, '삭제 성공!');
    } else {
      ApiResponse(res, HttpStatusCode.BAD_REQUEST, '삭제 실패!');
    }
  }

  async createAddress(req: Request, res: Response) {
    const { name, postcode, address, detailAddress, phone, isDefault } =
      req.body;
    const userId = req.user?.id;
    const result = await AddressService.createAddress({
      name,
      postcode,
      address,
      detail_address: detailAddress,
      phone,
      user_id: userId,
      is_default: isDefault,
    });

    if (result) {
      ApiResponse(res, HttpStatusCode.CREATED, '배송지 추가 성공!');
    } else {
      ApiResponse(res, HttpStatusCode.BAD_REQUEST, '배송지 추가 실패!');
    }
  }

  async updateAddress(req: Request, res: Response) {
    const { name, postcode, address, detailAddress, phone, isDefault, id } =
      req.body;
    const userId = req.user?.id;

    const result = await AddressService.updateAddress({
      id,
      name,
      postcode,
      address,
      detail_address: detailAddress,
      phone,
      user_id: userId,
      is_default: isDefault,
    });

    if (result?.affected >= 1) {
      ApiResponse(res, HttpStatusCode.CREATED, '배송지 수정 성공!');
    } else {
      ApiResponse(res, HttpStatusCode.BAD_REQUEST, '배송지 수정 실패!');
    }
  }

  async getDefaultAddress(req: Request, res: Response) {
    const userId = req.user?.id;
    const result = await AddressService.getDefaultAddress(userId);

    ApiResponse(res, HttpStatusCode.OK, '기본 배송지 조회 성공', result);
  }
}

export default new AddressController();
