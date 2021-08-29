import { useCallback, useState } from 'react';

const usePagination = <T extends Element>(
  limit: number,
  ref?: React.RefObject<T>
) => {
  const [offset, setOffset] = useState(0);

  const handleScrollFoucsing = useCallback(() => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [ref]);

  const handleOnClickPage = useCallback(
    (idx: number, flag?: boolean) => {
      setOffset(+idx * limit);

      if (ref && !flag) {
        handleScrollFoucsing();
      }
    },
    [limit, ref, handleScrollFoucsing]
  );

  return [offset, handleOnClickPage] as const;
};

export default usePagination;
