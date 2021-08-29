import { IThumbnails } from '@/types';

const MAX_COUNT = 9;
const PER_COUNT = 3;

type collectionType = Record<string, IThumbnails[]>;

const thumbnailsParser = (thumbnails: IThumbnails[]) => {
  const filteredThumbnails = thumbnails.slice(0, MAX_COUNT);

  const thumnailImages = filteredThumbnails.reduce(
    (collection: collectionType, cur, idx) => {
      const targetId = `target-${(idx / PER_COUNT) >> 0}`;
      const newCur = { ...cur, targetId };
      if (cur.type === 'detail') {
        collectThumbnailsData(collection, 'details', newCur);
      } else if (cur.type === 'origin') {
        collectThumbnailsData(collection, 'origins', newCur);
      } else {
        collectThumbnailsData(collection, 'thumbnails', newCur);
      }
      return collection;
    },
    {}
  );

  return [
    thumnailImages.details,
    thumnailImages.origins,
    thumnailImages.thumbnails,
  ] as const;
};

export default thumbnailsParser;

const collectThumbnailsData = (
  collection: collectionType,
  key: string,
  cur: IThumbnails
) => {
  collection?.[key] ? collection[key].push(cur) : (collection[key] = [cur]);
};
