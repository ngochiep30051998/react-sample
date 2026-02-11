import './Login.scss';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import cache from '@app/core/cache';
import { LOCAL_USER_KEY } from '@app/configs/auth.config';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

interface LoginFormValues {
  username: string;
  password: string;
  remember?: boolean;
}

/* Google G logo - simplified */
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
    <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

/* Facebook f logo */
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z"/>
  </svg>
);

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
