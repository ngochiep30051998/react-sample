import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import { FacebookIcon, GoogleIcon } from '@app/assets/icons';
import cache from '@core/cache';
import { LOCAL_USER_KEY } from '@configs/auth.config';
import useAuthStore from '@app/store/useAuthStore';
import { getPermissionsForRoles, ROLES } from '@configs/rbac.config';
import { Link, useNavigate } from 'react-router';

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

  const setRolesAndPermissions = useAuthStore((s) => s.setRolesAndPermissions);

  const handleFinish = (values: RegisterFormValues) => {
    const roles = [ROLES.ADMIN];
    const permissions = getPermissionsForRoles(roles);
    cache.setCache(LOCAL_USER_KEY, {
      token: 'demo-token',
      username: values.username,
      email: values.email,
    });
    setRolesAndPermissions(roles, permissions);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 box-border">
      <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] p-10 animate-fade-in">
        <div className="mb-7">
          <Title level={3} className="!mb-1 !font-bold !text-slate-800">
            Create Account
          </Title>
          <Text type="secondary">Please enter your details to sign up</Text>
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
            <Input size="large" prefix={<UserOutlined className="text-slate-400" />} placeholder="Enter your username..." autoComplete="username" className="!rounded-xl" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email.' },
              { type: 'email', message: 'Please enter a valid email address.' },
            ]}
          >
            <Input size="large" prefix={<MailOutlined className="text-slate-400" />} placeholder="Enter your email..." autoComplete="email" className="!rounded-xl" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please enter your password.' },
              { min: 6, message: 'Password must be at least 6 characters.' },
            ]}
          >
            <Input.Password size="large" prefix={<LockOutlined className="text-slate-400" />} placeholder="Enter your password..." autoComplete="new-password" className="!rounded-xl" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password.' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) return Promise.resolve();
                  return Promise.reject(new Error('Passwords do not match.'));
                },
              }),
            ]}
          >
            <Input.Password size="large" prefix={<LockOutlined className="text-slate-400" />} placeholder="Confirm your password..." autoComplete="new-password" className="!rounded-xl" />
          </Form.Item>

          <Form.Item className="!mb-5">
            <Button type="primary" htmlType="submit" size="large" block className="!h-11 !font-semibold !text-[15px] !rounded-xl">
              Sign up
            </Button>
          </Form.Item>

          <div className="text-center mb-6 text-sm">
            <Text type="secondary">Already have an account?</Text>{' '}
            <Link to="/login" className="text-primary font-medium no-underline hover:underline">
              Sign in
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <Button size="large" block className="!h-11 !rounded-xl !border-slate-200 !text-slate-600 flex items-center justify-center gap-2 hover:!border-slate-300 hover:!bg-slate-50" icon={<GoogleIcon />} onClick={() => {}}>
              Sign up with Google
            </Button>
            <Button size="large" block className="!h-11 !rounded-xl !border-slate-200 !text-slate-600 flex items-center justify-center gap-2 hover:!border-slate-300 hover:!bg-slate-50" icon={<FacebookIcon />} onClick={() => {}}>
              Sign up with Facebook
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
