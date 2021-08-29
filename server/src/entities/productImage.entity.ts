import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm';
import { InitEntity } from './base.entity';

import { Product } from './product.entity';

enum ImageType {
  Detail = 'detail',
  Origin = 'origin',
  Preload = 'preload',
  Thumbnail = 'thumbnail',
}
@Entity('product_image')
export class ProductImage extends InitEntity {
  @Column({ type: 'text' })
  url: string;

  @Column({ type: 'tinyint' })
  isThumbnail: boolean;

  @Column({ type: 'enum', enum: ImageType })
  type: ImageType;

  @ManyToOne(() => Product, (type) => type.productImage, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product!: Product;

  @Column()
  product_id: number;
}
