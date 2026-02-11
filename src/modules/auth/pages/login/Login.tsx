import './Login.scss';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { FacebookIcon, GoogleIcon } from '@app/assets/icons';
import cache from '@app/core/cache';
import { LOCAL_USER_KEY } from '@app/configs/auth.config';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

interface LoginFormValues {
  username: string;
  password: string;
  remember?: boolean;
}

const Login = () => {
  const navigate = useNavigate();

  const handleFinish = (values: LoginFormValues) => {
    cache.setCache(LOCAL_USER_KEY, {
      token: 'demo-token',
      username: values.username,
      remember: values.remember,
    });
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <Title level={3} className="login-title">
            Welcome Back
          </Title>
          <Text type="secondary" className="login-subtitle">
            Please enter your details
          </Text>
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
              prefix={<UserOutlined className="login-input-icon" />}
              placeholder="Enter your username..."
              autoComplete="username"
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
              prefix={<LockOutlined className="login-input-icon" />}
              placeholder="Enter your password..."
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item className="login-row">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link to="/forgotPassword" className="login-forgot-link">
              Forgot password?
            </Link>
          </Form.Item>

          <Form.Item className="login-actions">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="login-btn"
            >
              Login
            </Button>
          </Form.Item>

          <div className="login-signup">
            <Text type="secondary">Don&apos;t have an account?</Text>{' '}
            <Link to="/register" className="login-signup-link">
              Sign up now
            </Link>
          </div>

          <div className="login-social">
            <Button
              type="default"
              size="large"
              block
              className="login-social-btn"
              icon={<GoogleIcon />}
              onClick={() => {}}
            >
              Sign in with Google
            </Button>
            <Button
              type="default"
              size="large"
              block
              className="login-social-btn"
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
