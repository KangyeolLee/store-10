import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import * as S from './styles';

interface ContextProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export interface TabContextProps {
  children?: React.ReactNode;
  sticky?: boolean;
}

export const Context = createContext<ContextProps>({
  value: 0,
  setValue: () => null,
});

const TabContext = ({ children }: TabContextProps) => {
  const [value, setValue] = useState(0);

  return (
    <Context.Provider value={{ value, setValue }}>
      <S.Tab>{children}</S.Tab>
    </Context.Provider>
  );
};

export default TabContext;
