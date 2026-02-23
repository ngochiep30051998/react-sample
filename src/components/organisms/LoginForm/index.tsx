import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { Link } from 'react-router';
import { FacebookIcon, GoogleIcon } from '@app/assets/icons';
import AppButton from '@atoms/AppButton';
import AppCheckbox from '@atoms/AppCheckbox';
import AppInput from '@atoms/AppInput';
import AppTypography from '@atoms/AppTypography';
import OAuthButton from '@molecules/OAuthButton';

export interface LoginFormValues {
  username: string;
  password: string;
  remember?: boolean;
}

interface LoginFormProps {
  onFinish: (values: LoginFormValues) => void | Promise<void>;
  loading?: boolean;
}

export default function LoginForm({ onFinish, loading = false }: LoginFormProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 box-border">
      <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] p-10 animate-fade-in">
        <div className="mb-7">
          <AppTypography.Title level={3} className="!mb-1 !font-bold !text-slate-800">
            Welcome Back
          </AppTypography.Title>
          <AppTypography.Text type="secondary">Please enter your details</AppTypography.Text>
        </div>

        <Form<LoginFormValues>
          name="login-form"
          layout="vertical"
          onFinish={onFinish}
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
            <AppInput
              size="large"
              prefix={<UserOutlined className="text-slate-400" />}
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
            <AppInput.Password
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
                <AppCheckbox>Remember me</AppCheckbox>
              </Form.Item>
              <Link
                to="/forgotPassword"
                className="text-primary hover:text-primary-600 text-sm font-medium no-underline hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </Form.Item>

          <Form.Item className="!mb-5">
            <AppButton
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={loading}
              className="!h-11 !font-semibold !text-[15px] !rounded-xl"
            >
              Login
            </AppButton>
          </Form.Item>

          <div className="text-center mb-6 text-sm">
            <AppTypography.Text type="secondary">Don&apos;t have an account?</AppTypography.Text>{' '}
            <Link to="/register" className="text-primary font-medium no-underline hover:underline">
              Sign up now
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <OAuthButton icon={<GoogleIcon />} label="Sign in with Google" />
            <OAuthButton icon={<FacebookIcon />} label="Sign in with Facebook" />
          </div>
        </Form>
      </div>
    </div>
  );
}
