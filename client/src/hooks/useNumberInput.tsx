import { useCallback, useState } from 'react';
import notify from '@/components/Shared/Toastify/notify';

const useNumberInput = (initalValue?: number) => {
  const [value, setValue] = useState(initalValue ?? 0);

  const handleClickOnPlus = useCallback(
    () => setValue((value) => value + 1),
    [setValue]
  );

  // TODO: 모든 NumberInput의 값을 1 이하로 관리하는 것이 없는지 확인 필요
  const handleClickOnMinus = useCallback(() => {
    if (value === 1) return;
    setValue((value) => value - 1);
  }, [value]);

  const handleOnChnage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = e;

      if (+value < 1) {
        return notify('error', '1보다 작은 값은 입력하실 수 없어요!');
      }

      if (+value % 1 !== 0) {
        return notify('error', '소수점은 입력하실 수 없어요!');
      }

      if (+value > 100) {
        return notify('error', '100보다 큰 값은 입력하실 수 없어요!');
      }

      setValue(+value);
    },
    []
  );

  return [
    value,
    handleOnChnage,
    handleClickOnMinus,
    handleClickOnPlus,
  ] as const;
};

export default useNumberInput;
