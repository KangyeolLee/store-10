import BookmarkRepository from '@/repositories/bookmark.repository';

class BookmarkService {
  async createBookmark({ userId, productId }) {
    const bookmarkRepo = BookmarkRepository();
    return await bookmarkRepo.createBookmark({
      userId,
      productId,
    });
  }

  async getBookmarks(userId) {
    const bookmarkRepo = BookmarkRepository();
    const bookmarks = await bookmarkRepo.getBookmarks(userId);
    return bookmarks.map((bookmark) => {
      return bookmark.product_id;
    });
  }

  async getBookmarksDetail({ userId, start }) {
    const bookmarkRepo = BookmarkRepository();
    const bookmarks = await bookmarkRepo.getBookmarksDetail(userId, start);

    return bookmarks.map((bookmark) => {
      const img = bookmark.product.productImage.find(
        (img) => img.type === 'detail'
      );
      return {
        createdAt: bookmark.createdAt,
        productId: bookmark.product.id,
        title: bookmark.product.title,
        price: bookmark.product.price,
        image: img?.url,
      };
    });
  }

  async deleteBookmarks({ userId, productIds }) {
    const bookmarkRepo = BookmarkRepository();
    return await bookmarkRepo.deleteBookmarks({ userId, productIds });
  }
}

export default new BookmarkService();
