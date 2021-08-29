import OrderRepository from '@/repositories/order.repository';
import OrderProductRepository from '@/repositories/orderProduct.repository';
import AddressRepository from '@/repositories/address.repository';
import userService from './user.service';

class OrderService {
  async createOrder({
    user_id,
    products,
    status,
    delivery_request_message,
    address_id,
  }) {
    const orderRepo = OrderRepository();
    const result = await orderRepo.createOrder({
      user_id,
      products,
      status,
      delivery_request_message,
      address_id,
    });

    return {
      id: result?.generatedMaps[0].order_id,
    };
  }

  async getOrder({ id, user_id }) {
    const orderProductRepo = OrderProductRepository();
    const orderProducts = await orderProductRepo.getOrderProductsByOrderId(id);

    const orderRepo = OrderRepository();
    const order = await orderRepo.getOrder({ id, user_id });
    return {
      ...order,
      products: order.products.map((product) => ({
        id: product.id,
        img: product.productImage.find(
          (img) => img.isThumbnail && img.type === 'preload'
        )?.url,
        count: orderProducts.find(
          (orderProduct) => orderProduct.product_id === product.id
        ).count,
        title: product.title,
        price: product.price,
        discount: product.discount,
      })),
    };
  }

  async getOrderByProductId(product_id: string, user_id: number) {
    const orderRepo = OrderRepository();
    return await orderRepo.getOrderByProductId(product_id, user_id);
  }

  async getOrders({ user_id, year }) {
    const orderRepo = OrderRepository();
    const orders = await orderRepo.getOrders({ user_id, year });
    const orderIds = orders.map((order) => order.id);

    const orderProductRepo = OrderProductRepository();
    const orderProducts = await orderProductRepo.getOrderProductsByOrderIds(
      orderIds
    );

    return orders.map((order) => ({
      ...order,
      products: order.products.map((product) => ({
        id: product.id,
        img: product.productImage.find(
          (img) => img.isThumbnail && img.type === 'preload'
        )?.url,
        count: orderProducts.find(
          (orderProduct) =>
            orderProduct.product_id === product.id &&
            orderProduct.order_id === order.id
        ).count,
        title: product.title,
        price: product.price,
      })),
    }));
  }

  async updateOrder({ user_id, order, updateDefaultAddress }) {
    if (updateDefaultAddress) {
      const addressRepo = AddressRepository();
      await addressRepo.removeDefaultAddress(user_id);
      await addressRepo.updateAddress({
        is_default: updateDefaultAddress,
        id: order.address_id,
      });
    }

    if (order.user_coupon_id) {
      const useCouponSuccess = await userService.useCoupon({
        id: order.user_coupon_id,
        user_id,
      });
      if (!useCouponSuccess) {
        return null;
      }
    }

    const orderRepo = OrderRepository();
    return await orderRepo.updateOrder({ user_id, ...order });
  }
}

export default new OrderService();
