import { Bookmark } from '@/entities/bookmark.entity';
import {
  EntityRepository,
  getCustomRepository,
  Repository,
  DeleteResult,
  In,
} from 'typeorm';

interface IBookmarkInfo {
  userId: number;
  productId: number;
}

@EntityRepository(Bookmark)
class BookmarkRepository extends Repository<Bookmark> {
  createBookmark({ userId, productId }: IBookmarkInfo): Promise<Bookmark> {
    const Bookmark = this.create({
      user_id: userId,
      product_id: productId,
    });
    return this.save(Bookmark);
  }

  getBookmarksDetail(userId: number, start: number): Promise<Bookmark[]> {
    // TODO: productimage 하나만 가져오기
    console.log(start);
    const Bookmarks = this.find({
      skip: start,
      where: { user_id: userId },
      take: 8,
      relations: ['product', 'product.productImage'],
    });
    return Bookmarks;
  }

  getBookmarks(userId: number): Promise<Bookmark[]> {
    const Bookmarks = this.find({
      where: { user_id: userId },
    });
    return Bookmarks;
  }

  deleteBookmarks({
    productIds,
    userId,
  }: {
    productIds: number[];
    userId: number;
  }): Promise<DeleteResult> {
    return this.delete({ user_id: userId, product_id: In(productIds) });
  }
}

export default () => getCustomRepository(BookmarkRepository);
