import Button from '@/components/Shared/Button';
import { Input } from '@/components/Shared/Input';
import Title from '@/components/Shared/Title';
import useInput from '@/hooks/useInput';
import {
  validateAll,
  validateEmail,
  validateName,
  validatePassword,
  validateRePassword,
} from '@/utils/validator';
import React, { useCallback, useEffect, useState } from 'react';
import { postEmailCheck } from '@/lib/api/user/postEmailCheck';
import * as S from './styles';
import { CheckSVG } from '@/assets/svgs';
import { createUser } from '@/lib/api/user/createUser';
import { Redirect, useHistory } from '@/lib/Router';
import { notify } from '@/components/Shared/Toastify';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';
import { getCurrentUser } from '@/lib/api/user/getCurrentUser';

const SignUp = () => {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState({
    email: false,
    password: false,
    rePassword: false,
    name: false,
  });

  const [emailCheck, setEmailCheck] = useState(false);
  const [email, , onChangeEmail] = useInput('');
  const [password, , onChangePassword] = useInput('');
  const [user, setUser] = useRecoilState(userState);
  const { historyPush } = useHistory();
  const [rePassword, , onChangeRePassword] = useInput('');
  const [name, , onChangeName] = useInput('');

  useEffect(() => {
    if (
      Object.values(error).every((item) => item === false) &&
      email !== '' &&
      password !== '' &&
      name !== '' &&
      rePassword !== ''
    ) {
      setDisabled(false);
    }
  }, [error, email, password, name, rePassword]);

  const onClickEmailCheck = useCallback(async () => {
    if (!validateEmail(email)) {
      return notify('error', '올바른 이메일을 입력하세요.');
    }
    try {
      await postEmailCheck(email);
      setEmailCheck(true);
      notify('success', '사용할 수 있는 아이디입니다!');
    } catch (err) {
      notify('error', '이미 존재하는 아이디 입니다.');
    }
  }, [email, setEmailCheck]);

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

  const rePasswordCheck = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      if (validateRePassword(target.value, password)) {
        setError({ ...error, rePassword: false });
      } else {
        setError({ ...error, rePassword: true });
      }
    },
    [password, error]
  );

  const formSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const target = e.target as typeof e.target & {
        email: { value: string };
        password: { value: string };
        rePassword: { value: string };
        name: { value: string };
      };
      const email = target.email.value;
      const password = target.password.value;
      const rePassword = target.rePassword.value;
      const name = target.name.value;
      if (!validateAll(email, password, rePassword, name)) {
        notify('error', '회원가입 폼이 제대로 채워지지 않았습니다.');
      } else if (!emailCheck) {
        notify('error', '이메일 중복확인이 필요합니다.');
      } else {
        try {
          await createUser({ user_id: email, password, rePassword, name });
          const user = await getCurrentUser();
          setUser(user);
          historyPush('/');
        } catch (err) {
          notify('error', '알수 없는 에러입니다.');
        }
      }
    },
    [emailCheck, historyPush, setUser]
  );

  if (user) return <Redirect to="/" />;

  return (
    <S.SignUpContainer className="container">
      <Title level={3}>회원가입</Title>
      <S.FormContainer onSubmit={formSubmit}>
        <S.EmailContainer>
          <Input
            type="text"
            name="email"
            label="Outlined"
            labelName="이메일"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={(e) => {
              onChangeEmail(e);
              setEmailCheck(false);
            }}
            onBlur={(e) => {
              errorCheck(e, validateEmail);
            }}
            error={error.email}
            helperText="올바른 이메일 주소 형식이 아닙니다. ex) baemin@gmail.com"
          />
          <Button
            type="button"
            color="white"
            onClick={onClickEmailCheck}
            disabled={emailCheck}
          >
            {emailCheck ? <CheckSVG width={23} height={23} /> : '중복 확인'}
          </Button>
        </S.EmailContainer>
        <Input
          type="password"
          name="password"
          label="Outlined"
          labelName="비밀번호"
          value={password}
          onChange={onChangePassword}
          onBlur={(e) => errorCheck(e, validatePassword)}
          error={error.password}
          placeholder="비밀번호를 입력해주세요."
          helperText="10자 이상 영어 대문자, 소문자, 숫자, 특수문자 중 2종류를 조합해야합니다."
        />
        <Input
          type="password"
          name="rePassword"
          label="Outlined"
          labelName="비밀번호 재입력"
          onBlur={rePasswordCheck}
          error={error.rePassword}
          value={rePassword}
          onChange={onChangeRePassword}
          helperText="비밀번호가 일치하지 않거나 비밀번호를 입력해야 합니다."
          placeholder="비밀번호를 한번 더 입력해주세요."
        />
        <Input
          type="text"
          name="name"
          label="Outlined"
          onBlur={(e) => errorCheck(e, validateName)}
          error={error.name}
          value={name}
          onChange={onChangeName}
          labelName="이름"
          helperText="이름을 입력해주세요."
          placeholder="이름을 입력해주세요."
        />
        <Button type="submit" color="primary" disabled={disabled}>
          회원가입
        </Button>
      </S.FormContainer>
    </S.SignUpContainer>
  );
};

export default SignUp;
