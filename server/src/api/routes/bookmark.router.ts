import { Router } from 'express';
import wrapAsync from '@/utils/wrapAsync';
import authJWT from '../middlewares/auth.middleware';
import BookmarkController from '@/controllers/bookmark.controller';
import invalidRequest from '../middlewares/invalid-request';
import deleteBookmarkValidators from '../middlewares/validation/bookmark/deleteBookmarks';

const router = Router();

router.post('/', authJWT, wrapAsync(BookmarkController.createBookmark));
router.get(
  '/detail',
  authJWT,
  wrapAsync(BookmarkController.getBookmarksDetail)
);
router.get('/', authJWT, wrapAsync(BookmarkController.getBookmarks));
router.delete(
  '/',
  authJWT,
  invalidRequest(...deleteBookmarkValidators),
  wrapAsync(BookmarkController.deleteBookmarks)
);

export default router;
