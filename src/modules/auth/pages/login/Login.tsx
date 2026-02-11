import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { FacebookIcon, GoogleIcon } from '@app/assets/icons';
import cache from '@app/core/cache';
import { LOCAL_USER_KEY } from '@app/configs/auth.config';
import { getPermissionsForRoles, ROLES } from '@app/configs/rbac.config';
import { Link, useNavigate } from 'react-router-dom';
import { sleep } from '@app/core/sleep';
import { useLoading } from '@app/contexts/LoadingContext';

const { Title, Text } = Typography;

interface LoginFormValues {
  username: string;
  password: string;
  remember?: boolean;
}

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 box-border">
      <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] p-10 animate-fade-in">
        <div className="mb-7">
          <Title level={3} className="!mb-1 !font-bold !text-slate-800">
            Welcome Back
          </Title>
          <Text type="secondary">Please enter your details</Text>
        </div>

        <Form<LoginFormValues>
          name="login-form"
          layout="vertical"
          onFinish={handleFinish}
          requiredMark={false}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: 'Please enter your username.' },
              { min: 3, message: 'Username must be at least 3 characters.' },
            ]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="text-slate-400" />}
              placeholder="Enter your username..."
              autoComplete="username"
              className="!rounded-xl"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please enter your password.' },
              { min: 6, message: 'Password must be at least 6 characters.' },
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="text-slate-400" />}
              placeholder="Enter your password..."
              autoComplete="current-password"
              className="!rounded-xl"
            />
          </Form.Item>

          <Form.Item className="!mb-5">
            <div className="flex justify-between items-center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to="/forgotPassword" className="text-primary hover:text-primary-600 text-sm font-medium no-underline hover:underline">
                Forgot password?
              </Link>
            </div>
          </Form.Item>

          <Form.Item className="!mb-5">
            <Button type="primary" htmlType="submit" size="large" block className="!h-11 !font-semibold !text-[15px] !rounded-xl">
              Login
            </Button>
          </Form.Item>

          <div className="text-center mb-6 text-sm">
            <Text type="secondary">Don&apos;t have an account?</Text>{' '}
            <Link to="/register" className="text-primary font-medium no-underline hover:underline">
              Sign up now
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              size="large"
              block
              className="!h-11 !rounded-xl !border-slate-200 !text-slate-600 flex items-center justify-center gap-2 hover:!border-slate-300 hover:!bg-slate-50"
              icon={<GoogleIcon />}
              onClick={() => {}}
            >
              Sign in with Google
            </Button>
            <Button
              size="large"
              block
              className="!h-11 !rounded-xl !border-slate-200 !text-slate-600 flex items-center justify-center gap-2 hover:!border-slate-300 hover:!bg-slate-50"
              icon={<FacebookIcon />}
              onClick={() => {}}
            >
              Sign in with Facebook
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
