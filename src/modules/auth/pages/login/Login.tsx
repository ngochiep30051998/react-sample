import cache from '@app/core/cache';
import { LOCAL_USER_KEY } from '@app/configs/auth.config';
import { getPermissionsForRoles, ROLES } from '@app/configs/rbac.config';
import { useNavigate } from 'react-router';
import { sleep } from '@app/core/sleep';
import { useLoading } from '@app/contexts/LoadingContext';
import LoginForm, { type LoginFormValues } from '@app/components/organisms/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  const loading = useLoading();

  const handleFinish = async (values: LoginFormValues) => {
    loading.show();
    await sleep(1000);
    const roles = [ROLES.ADMIN];
    const permissions = getPermissionsForRoles(roles);
    cache.setCache(LOCAL_USER_KEY, {
      token: 'demo-token',
      username: values.username,
      remember: values.remember,
      roles,
      permissions,
    });
    loading.hide();
    navigate('/');
  };

  return <LoginForm onFinish={handleFinish} />;
};

export default Login;
