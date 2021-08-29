import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm';
import { InitEntity } from './base.entity';
import { Review } from './review.entity';

@Entity('review_image')
export class ReviewImage extends InitEntity {
  @Column({ type: 'text' })
  url: string;

  @ManyToOne(() => Review, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'review_id' })
  review!: Review;

  @Column()
  review_id!: number;
}
