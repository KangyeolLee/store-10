import Button from '@/components/Shared/Button';
import Title from '@/components/Shared/Title';
import { githubLogin } from '@/lib/api/auth/githubLogin';
import { Redirect, useHistory, useParams } from '@/lib/Router';
import { userState } from '@/recoil/user';
import {
  PERSONAL_INFO_TEXT,
  TERMS_OF_SERVICE,
} from '@/utils/constant/approval';
import { SITE_TITLE } from '@/utils/constant/common';
import React, { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './styles';

interface ICheck {
  check0: boolean;
  check1: boolean;
  [propsName: string]: boolean;
}

const Approval = () => {
  const { historyPush } = useHistory();
  const { params } = useParams();

  const GithubLogin = async () => {
    const { githubUrl } = await githubLogin();
    window.location.href = githubUrl;
  };

  const onClickNextPage = useCallback(() => {
    const { authtype } = params;
    if (authtype === 'github') {
      GithubLogin();
    } else {
      historyPush('/signup');
    }
  }, [params, historyPush]);

  const [checked, setChecked] = useState<ICheck>({
    check0: false,
    check1: false,
  });

  const handleChecked = (idx: number) => {
    setChecked({
      ...checked,
      [`check${idx}`]: !checked[`check${idx}`],
    });
  };

  const isAllchecked = checked.check0 && checked.check1;

  const handleAllChecked = () => {
    setChecked({
      check0: !isAllchecked,
      check1: !isAllchecked,
    });
  };

  const [user] = useRecoilState(userState);

  if (user) return <Redirect to="/" />;

  return (
    <S.ApprovalContainer className="container">
      <Title level={3}>약관 동의</Title>
      <S.ApprovalCheckBox
        onChange={handleAllChecked}
        checked={isAllchecked}
        label={`${SITE_TITLE}의 모든 약관을 확인하고 전체 동의합니다.`}
      />
      <S.ApprovalCheckBox
        label="(필수) 이용약관"
        onChange={() => handleChecked(0)}
        checked={checked.check0}
      />
      <S.ApprovalBox>{TERMS_OF_SERVICE}</S.ApprovalBox>
      <S.ApprovalCheckBox
        label="(필수) 개인정보 수집 및 이용"
        onChange={() => handleChecked(1)}
        checked={checked.check1}
      />
      <S.ApprovalBox>{PERSONAL_INFO_TEXT}</S.ApprovalBox>
      <S.ButtonContainer>
        <Button
          type="button"
          color="white"
          onClick={() => historyPush('/select_auth')}
        >
          이전단계
        </Button>
        <Button
          type="button"
          color="primary"
          onClick={onClickNextPage}
          disabled={!isAllchecked}
        >
          다음단계
        </Button>
      </S.ButtonContainer>
    </S.ApprovalContainer>
  );
};

export default Approval;
