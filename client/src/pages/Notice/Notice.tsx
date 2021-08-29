import Collapse from '@/components/Shared/Collapse';
import Title from '@/components/Shared/Title';
import React from 'react';
import * as S from './styles';
import { items } from '@/utils/constant/notices';
import { NOTICE_HEADER } from '@/utils/constant/CollapseHeaders';

const Notice = () => {
  return (
    <S.Notice className="container">
      <Title level={4} className="title">
        공지사항
      </Title>
      <Collapse
        forNotice
        headers={NOTICE_HEADER}
        items={items}
        gaps="3.1rem 3fr 1fr 1fr"
      ></Collapse>
    </S.Notice>
  );
};

export default Notice;
