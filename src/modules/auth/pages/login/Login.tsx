import cache from '@core/cache';
import { LOCAL_USER_KEY } from '@configs/auth.config';
import { getPermissionsForRoles } from '@configs/rbac.config';
import useAuthStore from '@app/store/useAuthStore';
import { useNavigate } from 'react-router';
import { useLoading } from '@contexts/LoadingContext';
import LoginForm, { type LoginFormValues } from '@organisms/LoginForm';
import { getRolesFromBackend } from '@app/modules/auth/services/auth.service';

const Login = () => {
  const navigate = useNavigate();
  const loading = useLoading();
  const setRolesAndPermissions = useAuthStore((s) => s.setRolesAndPermissions);

  const handleFinish = async (values: LoginFormValues) => {
    loading.show();
    try {
      const roles = await getRolesFromBackend(values.username);
      const permissions = getPermissionsForRoles(roles);
      cache.setCache(LOCAL_USER_KEY, {
        token: 'demo-token',
        username: values.username,
        remember: values.remember,
      });
      setRolesAndPermissions(roles, permissions);
      navigate('/');
    } finally {
      loading.hide();
    }
  };

  return <LoginForm onFinish={handleFinish} />;
};

export default Login;
