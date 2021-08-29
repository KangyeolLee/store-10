import { ProductImage } from '@/entities/productImage.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

@EntityRepository(ProductImage)
class ProductImageRepository extends Repository<ProductImage> {
  findProductThumbnailsById(
    Product_id: string
  ): Promise<ProductImage[] | undefined> {
    return this.find({
      where: [
        { product_id: +Product_id, type: 'detail' },
        { product_id: +Product_id, type: 'origin' },
        { product_id: +Product_id, type: 'thumbnail' },
      ],
    });
  }
}

export default () => getCustomRepository(ProductImageRepository);
