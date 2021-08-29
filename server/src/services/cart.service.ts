import CartRepository from '@/repositories/cart.respository';

class CartService {
  async createOrUpdateCart({ userId, productId, count }) {
    const cartRepo = CartRepository();
    const cart = await cartRepo.getCart({
      user_id: userId,
      product_id: productId,
    });
    if (cart) {
      return await cartRepo.updateCart({
        userId,
        productId,
        count: cart.count + count,
      });
    } else {
      return await cartRepo.createCart({
        userId,
        productId,
        count,
      });
    }
  }

  async getCarts(userId) {
    const cartRepo = CartRepository();
    const carts = await cartRepo.getCarts(userId);

    return carts.map((cart) => {
      const img = cart.product.productImage.find(
        (img) => img.type === 'detail'
      );
      return {
        count: cart.count,
        createdAt: cart.createdAt,
        productId: cart.product.id,
        title: cart.product.title,
        price: cart.product.price,
        image: img?.url,
        discount: cart.product.discount,
      };
    });
  }

  async deleteCart({ userId, productIds }) {
    const cartRepo = CartRepository();
    return await cartRepo.deleteCart({ userId, productIds });
  }
}

export default new CartService();
