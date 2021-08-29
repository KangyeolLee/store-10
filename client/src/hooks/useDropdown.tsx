import { useState, useCallback } from 'react';

const useDropdown = (initialValue: number) => {
  const [status, setStatus] = useState(initialValue);

  const handleOnClickDropdown = useCallback((selected: number) => {
    setStatus(selected);
  }, []);

  return [status, handleOnClickDropdown] as const;
};

export default useDropdown;
