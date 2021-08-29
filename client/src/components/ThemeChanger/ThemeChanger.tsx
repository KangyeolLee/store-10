import React, { useCallback } from 'react';
import * as S from './styles';
interface Props {
  toggleMode: () => void;
  currentTheme: string;
  toggleMissionModal: () => void;
}

const ThemeChanger = ({ ...props }: Props) => {
  const { toggleMode, currentTheme, toggleMissionModal } = props;
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <S.ThemeChangerWrapper>
      <S.MissionButton onClick={toggleMissionModal}>
        <S.TargetSvg />
        미션 달성 현황
      </S.MissionButton>
      {currentTheme === 'light-mode' ? (
        <S.ThemeButton title="change to darkmode" onClick={toggleMode}>
          <S.MoonSvg />
          <span>다크모드</span>
        </S.ThemeButton>
      ) : (
        <S.ThemeButton title="change to lightmode" onClick={toggleMode}>
          <S.SunSvg />
          <span>라이트모드</span>
        </S.ThemeButton>
      )}
      <S.ScrollButton title="top page" onClick={scrollToTop}>
        <S.ArrowSvg />
      </S.ScrollButton>
    </S.ThemeChangerWrapper>
  );
};

export default ThemeChanger;
