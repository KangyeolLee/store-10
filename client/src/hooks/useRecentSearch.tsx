import { useCallback, useState } from 'react';

const useRecentSearch = (): [
  string[],
  (value: string) => void,
  (value: number) => void
] => {
  const storage: string | null = localStorage.getItem('recentItems');
  const items = storage ? (JSON.parse(storage) as string[]) : [];

  const [recentItems, setRecentItems] = useState(items);

  const recentItemHandler = useCallback(
    (value: string) => {
      //동일한 검색어가 있을경우 return
      if (recentItems.includes(value)) return;
      const itemsArr = [value, ...recentItems.slice(0, 9)];
      localStorage.setItem('recentItems', JSON.stringify(itemsArr));
      setRecentItems(itemsArr);
    },
    [recentItems]
  );

  const removeItemHandler = useCallback(
    (idx: number) => {
      const removeRecentData = [...recentItems];
      removeRecentData.splice(idx, 1);
      localStorage.setItem('recentItems', JSON.stringify(removeRecentData));
      setRecentItems(removeRecentData);
    },
    [recentItems]
  );

  return [recentItems, recentItemHandler, removeItemHandler];
};

export default useRecentSearch;
