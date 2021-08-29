import { OrderProduct } from '@/entities/orderProduct.entity';
import { EntityRepository, getCustomRepository, In, Repository } from 'typeorm';

@EntityRepository(OrderProduct)
class OrderProductRepository extends Repository<OrderProduct> {
  getBestProductIds(lmit: number) {
    return this.createQueryBuilder('orderProduct')
      .select('orderProduct.product_id', 'product_id')
      .groupBy('product_id')
      .orderBy('COUNT(product_id)', 'DESC')
      .take(lmit)
      .getRawMany();
  }

  getOrderProductsByOrderId(order_id: number) {
    return this.find({
      where: { order_id },
    });
  }

  getOrderProductsByOrderIds(order_ids: number[]) {
    return this.find({
      where: { order_id: In(order_ids) },
    });
  }
}

export default () => getCustomRepository(OrderProductRepository);
