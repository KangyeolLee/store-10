import { ReviewImage } from '@/entities/reviewImage.entity';
import {
  DeleteResult,
  EntityRepository,
  getCustomRepository,
  Repository,
} from 'typeorm';

@EntityRepository(ReviewImage)
class ReviewImageRepository extends Repository<ReviewImage> {
  findReviewImagesById(review_id: number): Promise<ReviewImage[]> {
    return this.find({
      select: ['url'],
      where: { review_id: review_id },
    });
  }

  createReviewImage(reviewImage: ReviewImage): Promise<ReviewImage> {
    const reviewImg = this.create(reviewImage);
    return this.save(reviewImg);
  }

  deleteReviewImage(review_id: number, url: string): Promise<DeleteResult> {
    return this.delete({ review_id, url });
  }
}

export default () => getCustomRepository(ReviewImageRepository);
