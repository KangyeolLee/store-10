import React, { useContext } from 'react';
import * as S from './styles';
import { Context } from './TabContext';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
}

const TabPanel = ({ children, index }: TabPanelProps) => {
  const { value } = useContext(Context);

  if (value !== index) return null;

  return (
    <S.TabPanel className="pagination-scroll-top container" data-index={index}>
      {children}
    </S.TabPanel>
  );
};

export default TabPanel;
