import Button from '@/components/Shared/Button';
import { Input } from '@/components/Shared/Input';
import { notify } from '@/components/Shared/Toastify';
import useInput from '@/hooks/useInput';
import { passwordCheck } from '@/lib/api/auth/passwordCheck';
import { changeNickName } from '@/lib/api/user/changeNickName';
import { changePassword } from '@/lib/api/user/changePassword';
import { userState } from '@/recoil/user';
import { IUser } from '@/types';
import { validatePassword, validateRePassword } from '@/utils/validator';
import React, { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './styles';

const ChangeUserInfo = () => {
  const [isPasswordAuth, setIsPasswordAuth] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const [password, , onChangePassword] = useInput('');
  const [nickname, , onChangeNickName] = useInput(user?.name || '');
  const [newPw, setNewPw, onChangenewPw] = useInput('');
  const [confirmNewPw, setConfirmNewPw, onChangeConfirmNewPw] = useInput('');
  const [error, setError] = useState({
    password: false,
    rePassword: false,
  });

  const errorCheck = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      validateFunction: (param: string) => boolean
    ) => {
      const { name, value } = e.target;
      if (validateFunction(value)) {
        setError({ ...error, [name]: false });
      } else {
        setError({ ...error, [name]: true });
      }
    },
    [error]
  );

  const authPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await passwordCheck(password);
      setIsPasswordAuth(true);
    } catch (e) {
      notify('error', '패스워드가 일치하지 않습니다.');
    }
  };

  const onClickChangeNickName = async () => {
    try {
      await changeNickName(nickname);
      setUser({ ...(user as IUser), name: nickname });
      notify('success', '성공적으로 닉네임을 변경하였습니다.');
    } catch (e) {
      notify('error', '알수 없는 오류로 닉네임을 변경하지 못했습니다.');
    }
  };

  const rePasswordCheck = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      if (validateRePassword(target.value, newPw)) {
        setError({ ...error, rePassword: false });
      } else {
        setError({ ...error, rePassword: true });
      }
    },
    [newPw, error]
  );

  const onClickChangePassword = async () => {
    if (newPw !== confirmNewPw)
      return notify('error', '두 패스워드가 일치하지 않습니다.');
    else if (!validatePassword(newPw))
      return notify(
        'error',
        '10자 이상 영어 대문자, 소문자, 숫자, 특수문자 중 2종류를 조합해야합니다.'
      );
    try {
      await changePassword(newPw, confirmNewPw);
      setIsPasswordAuth(true);
      setNewPw('');
      setConfirmNewPw('');
      notify('success', '성공적으로 패스워드를 변경하였습니다.');
    } catch (e) {
      notify('error', '알수 없는 오류로 패스워드를 변경하지 못했습니다.');
    }
  };

  return (
    <>
      {user?.is_oauth || isPasswordAuth ? (
        <div>
          <S.NickNameContainer
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
            }}
          >
            <S.ContainerTitle>이름 변경</S.ContainerTitle>
            <div className="input-wrapper">
              <Input
                type="text"
                label="Outlined"
                name="nickname"
                labelName="이름"
                maxLength={8}
                value={nickname}
                onChange={onChangeNickName}
              />
              <Button
                type="button"
                color="primary"
                onClick={onClickChangeNickName}
              >
                이름 변경
              </Button>
            </div>
          </S.NickNameContainer>
          {!user?.is_oauth && (
            <S.NewPasswordContainer
              onSubmit={(e: React.FormEvent) => {
                e.preventDefault();
              }}
            >
              <S.ContainerTitle>비밀번호 변경</S.ContainerTitle>
              <input hidden type="text" autoComplete="username" />
              <Input
                type="password"
                label="Outlined"
                name="password"
                labelName="새 비밀번호"
                value={newPw}
                onChange={onChangenewPw}
                error={error.password}
                onBlur={(e) => errorCheck(e, validatePassword)}
                helperText="10자 이상 영어 대문자, 소문자, 숫자, 특수문자 중 2종류를 조합해야합니다."
                autoComplete="new-password"
              />

              <Input
                type="password"
                label="Outlined"
                name="rePassword"
                labelName="새 비밀번호 확인"
                value={confirmNewPw}
                onChange={onChangeConfirmNewPw}
                onBlur={rePasswordCheck}
                error={error.rePassword}
                helperText="비밀번호가 일치하지 않거나 비밀번호를 입력해야 합니다."
                autoComplete="new-password"
              />
              <Button
                type="button"
                color="primary"
                onClick={onClickChangePassword}
              >
                비밀번호 변경
              </Button>
            </S.NewPasswordContainer>
          )}
        </div>
      ) : (
        <S.AuthContainer>
          <S.Information>
            회원정보 변경을 하려면 비밀번호 인증이 필요합니다.
          </S.Information>
          <S.PasswordContainer onSubmit={authPassword}>
            <input hidden type="text" autoComplete="username" />
            <Input
              type="password"
              label="Outlined"
              name="password-auth"
              labelName="비밀번호"
              value={password}
              onChange={onChangePassword}
              autoComplete="new-password"
            />
            <Button type="submit" color="primary">
              확인
            </Button>
          </S.PasswordContainer>
        </S.AuthContainer>
      )}
    </>
  );
};

export default ChangeUserInfo;
