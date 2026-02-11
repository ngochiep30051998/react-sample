import './Register.scss';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import { FacebookIcon, GoogleIcon } from '@app/assets/icons';
import cache from '@app/core/cache';
import { LOCAL_USER_KEY } from '@app/configs/auth.config';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm<RegisterFormValues>();

  const handleFinish = (values: RegisterFormValues) => {
    cache.setCache(LOCAL_USER_KEY, {
      token: 'demo-token',
      username: values.username,
      email: values.email,
    });
    navigate('/');
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-header">
          <Title level={3} className="register-title">
            Create Account
          </Title>
          <Text type="secondary" className="register-subtitle">
            Please enter your details to sign up
          </Text>
        </div>

        <Form<RegisterFormValues>
          form={form}
          name="register-form"
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
              prefix={<UserOutlined className="register-input-icon" />}
              placeholder="Enter your username..."
              autoComplete="username"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email.' },
              { type: 'email', message: 'Please enter a valid email address.' },
            ]}
          >
            <Input
              size="large"
              prefix={<MailOutlined className="register-input-icon" />}
              placeholder="Enter your email..."
              autoComplete="email"
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
              prefix={<LockOutlined className="register-input-icon" />}
              placeholder="Enter your password..."
              autoComplete="new-password"
            />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password.' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match.'));
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="register-input-icon" />}
              placeholder="Confirm your password..."
              autoComplete="new-password"
            />
          </Form.Item>

          <Form.Item className="register-actions">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="register-btn"
            >
              Sign up
            </Button>
          </Form.Item>

          <div className="register-signin">
            <Text type="secondary">Already have an account?</Text>{' '}
            <Link to="/login" className="register-signin-link">
              Sign in
            </Link>
          </div>

          <div className="register-social">
            <Button
              type="default"
              size="large"
              block
              className="register-social-btn"
              icon={<GoogleIcon />}
              onClick={() => {}}
            >
              Sign up with Google
            </Button>
            <Button
              type="default"
              size="large"
              block
              className="register-social-btn"
              icon={<FacebookIcon />}
              onClick={() => {}}
            >
              Sign up with Facebook
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
