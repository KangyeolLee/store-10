import { Cart } from '@/entities/cart.entity';
import {
  EntityRepository,
  getCustomRepository,
  Repository,
  DeleteResult,
  In,
} from 'typeorm';

interface ICartInfo {
  userId: number;
  productId: number;
  count: number;
}

@EntityRepository(Cart)
class CartRepository extends Repository<Cart> {
  createCart({ userId, productId, count }: ICartInfo): Promise<Cart> {
    const Cart = this.create({
      user_id: userId,
      product_id: productId,
      count,
    });
    return this.save(Cart);
  }

  getCarts(userId: number): Promise<Cart[]> {
    // TODO: productimage 하나만 가져오기
    const carts = this.find({
      where: { user_id: userId },
      relations: ['product', 'product.productImage'],
    });
    return carts;
  }

  deleteCart({
    productIds,
    userId,
  }: {
    productIds: number[];
    userId: number;
  }): Promise<DeleteResult> {
    return this.delete({ user_id: userId, product_id: In(productIds) });
  }

  getCart({ user_id, product_id }: { user_id: number; product_id: number }) {
    return this.findOne({ where: { user_id, product_id } });
  }

  updateCart({ userId, productId, count }: ICartInfo) {
    return this.update({ user_id: userId, product_id: productId }, { count });
  }
}

export default () => getCustomRepository(CartRepository);
