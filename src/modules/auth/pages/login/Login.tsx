import { useEffect } from 'react';

import './Login.scss';
import cache from '@app/core/cache';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LOCAL_USER_KEY } from '@app/configs/auth.config';


const Login = () => {
  const navigate = useNavigate();
  const handleLogin = ()=> {
    cache.setCache(LOCAL_USER_KEY,{token:'ssss'});
    navigate('/')
    
  }
  return <><Button onClick={handleLogin}>Login</Button></>
}

export default Login;