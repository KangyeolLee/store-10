import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';

interface IInfinityScroll<DataType> {
  key: string | (string | number)[];
  fetchingFunction: ({ pageParam }: { pageParam?: any }) => Promise<DataType>;
  fetchParams: Record<string, unknown>;
  inViewOption?: Record<string, unknown> | undefined;
}

const useInfiniteScroll = <T extends unknown>({
  key,
  fetchingFunction,
  fetchParams,
  inViewOption = {
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.5,
  },
}: IInfinityScroll<T>) => {
  const { ref, inView } = useInView(inViewOption);

  const { data, isLoading, isFetching, fetchNextPage, error, status, remove } =
    useInfiniteQuery<T>(
      key,
      () =>
        fetchingFunction({
          pageParam: fetchParams,
        }),
      {
        refetchOnWindowFocus: false,
      }
    );

  return {
    data,
    inView,
    fetchNextPage,
    isLoading,
    isFetching,
    error,
    status,
    ref,
    remove,
  };
};

export default useInfiniteScroll;
