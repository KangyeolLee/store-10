import {
  HeartSVG,
  UserSVG,
  CartSVG,
  MoneySVG,
  DeliverySVG,
  LocationSVG,
  FilterSVG,
  PlusSVG,
  SearchSVG,
  MenuSVG,
} from '@/assets/svgs';
import useMission from '@/hooks/useMission';
import { MissionListKeys } from '@/types';
import React from 'react';
import Title from '@/components/Shared/Title';
import ProgressBar from './ProgressBar';
import * as S from './styles';
import useGlobalTheme from '@/hooks/useGlobalTheme';
import { MISSIONS } from '@/contstants';

interface IProps {
  toggleModal: () => void;
}

const MissionTemplate = {
  ...MISSIONS,
};

const MissionModal = ({ toggleModal }: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, __, themeString] = useGlobalTheme();
  const [missionList] = useMission();

  const totalMissionLength = Object.keys(MISSIONS).length; // 추가한 미션 개수만큼 개수를 추가해주시면 됩니다.
  const missionCompleteStatus = Math.floor(
    (Object.keys(missionList).length / totalMissionLength) * 100
  );

  const isCompleteClassName = (val: boolean | undefined) => {
    return val ? 'complete' : '';
  };

  const recentMission: MissionListKeys | null = localStorage.getItem(
    'recentMission'
  ) as MissionListKeys | null;

  return (
    <S.MissionLayout width="80%" height="80%" toggleModal={toggleModal}>
      <Title className="title" level={2}>
        도전, 배민팡 미션!
      </Title>
      <S.SubTitle>미션을 해결하고 쿠폰을 받아가세요.</S.SubTitle>
      <S.MissionStatus>
        <div className="current-status">
          <Title level={5}>미션 달성률 {missionCompleteStatus}%</Title>
          <div className={'recent-status ' + themeString}>
            최근 달성 미션 :
            {recentMission ? MissionTemplate[recentMission] : '없음'}
          </div>
        </div>
        <ProgressBar
          className="percent-guage"
          percent={missionCompleteStatus}
        />
      </S.MissionStatus>
      <S.MissionList className={themeString}>
        <S.Mission className={isCompleteClassName(missionList.login)}>
          <UserSVG />
          {MissionTemplate.login}
        </S.Mission>
        <S.Mission className={isCompleteClassName(missionList.bookmark)}>
          <HeartSVG />
          {MissionTemplate.bookmark}
        </S.Mission>
        <S.Mission className={isCompleteClassName(missionList.moreDescription)}>
          <PlusSVG className="fill plus" />
          {MissionTemplate.moreDescription}
        </S.Mission>
        <S.Mission className={isCompleteClassName(missionList.addCart)}>
          <CartSVG className="fill" />
          {MissionTemplate.addCart}
        </S.Mission>
        <S.Mission className={isCompleteClassName(missionList.pay)}>
          <MoneySVG className="fill" />
          {MissionTemplate.pay}
        </S.Mission>
        <S.Mission className={isCompleteClassName(missionList.checkDelivery)}>
          <DeliverySVG className="fill" />
          {MissionTemplate.checkDelivery}
        </S.Mission>
        <S.Mission className={isCompleteClassName(missionList.changeAddress)}>
          <LocationSVG className="fill" />
          {MissionTemplate.changeAddress}
        </S.Mission>
        <S.Mission
          className={isCompleteClassName(missionList.orderHistoryFilter)}
        >
          <FilterSVG className="fill" />
          {MissionTemplate.orderHistoryFilter}
        </S.Mission>
        <S.Mission className={isCompleteClassName(missionList.search)}>
          <SearchSVG />
          {MissionTemplate.search}
        </S.Mission>
        <S.Mission className={isCompleteClassName(missionList.category)}>
          <MenuSVG className="fill" />
          {MissionTemplate.category}
        </S.Mission>

        <S.Mission className={isCompleteClassName(missionList.createReview)}>
          <MenuSVG className="fill" />
          {MissionTemplate.createReview}
        </S.Mission>
        <S.Mission className={isCompleteClassName(missionList.updateReview)}>
          <MenuSVG className="fill" />
          {MissionTemplate.updateReview}
        </S.Mission>
        <S.Mission className={isCompleteClassName(missionList.createQuestion)}>
          <MenuSVG className="fill" />
          {MissionTemplate.createQuestion}
        </S.Mission>
        <S.Mission className={isCompleteClassName(missionList.updateQuestion)}>
          <MenuSVG className="fill" />
          {MissionTemplate.updateQuestion}
        </S.Mission>
      </S.MissionList>
    </S.MissionLayout>
  );
};

export default MissionModal;
