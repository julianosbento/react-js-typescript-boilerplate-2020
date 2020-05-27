import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Label } from '../../components';
import { loadRequest } from '../../store/ducks/login/actions';
import { typedUseSelector } from '../../store';

import * as S from './styles';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const username = typedUseSelector((state) => state.login.data.username);

  useEffect(() => {
    dispatch(loadRequest());
  }, [username]);

  return (
    <S.Wrapper>
      <Label label={username} />
    </S.Wrapper>
  );
};

export default Login;
