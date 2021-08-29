import { Request, Response } from 'express';
import HttpStatusCode from '@/types/statusCode';
import ApiResponse from '@/api/middlewares/response-format';
import BookmarkService from '@/services/bookmark.service';

class BookmarkController {
  async createBookmark(req: Request, res: Response) {
    const { productId } = req.body;
    const userId = req.user.id;
    await BookmarkService.createBookmark({ productId, userId });

    ApiResponse(res, HttpStatusCode.NO_CONTENT);
  }

  async getBookmarks(req: Request, res: Response) {
    const userId = req.user.id;
    const bookmarks = await BookmarkService.getBookmarks(userId);

    ApiResponse(res, HttpStatusCode.OK, '찜 목록 조회 성공', bookmarks);
  }

  async getBookmarksDetail(req: Request, res: Response) {
    const userId = req.user.id;
    const { start } = req.query;
    const bookmarks = await BookmarkService.getBookmarksDetail({
      userId,
      start: +start,
    });

    ApiResponse(res, HttpStatusCode.OK, '찜 목록 상세 조회 성공', bookmarks);
  }

  async deleteBookmarks(req: Request, res: Response) {
    const { productIds } = req.query;
    const userId = req.user.id;
    await BookmarkService.deleteBookmarks({
      userId,
      productIds: JSON.parse(productIds as string),
    });

    ApiResponse(res, HttpStatusCode.NO_CONTENT);
  }
}

export default new BookmarkController();
