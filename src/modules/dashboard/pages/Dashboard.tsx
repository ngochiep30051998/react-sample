import { Card, Col, Row, Statistic } from 'antd';
import { ArrowUpOutlined, ShoppingOutlined, UserOutlined, DollarOutlined, RiseOutlined } from '@ant-design/icons';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from 'recharts';
import { chartData, dashboardStats } from '../mock';

export default function Dashboard() {
  const { totalUsers, totalOrders, revenue, growth } = dashboardStats;

  return (
    <div className="animate-slide-up">
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title={<span className="text-slate-500 font-medium">Total Users</span>}
              value={totalUsers}
              prefix={<UserOutlined className="text-2xl text-primary" />}
              suffix={
                <span className="text-xs text-emerald-500 font-medium">
                  <ArrowUpOutlined /> {growth}%
                </span>
              }
              valueStyle={{ color: '#667eea', fontWeight: 700 }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title={<span className="text-slate-500 font-medium">Total Orders</span>}
              value={totalOrders}
              prefix={<ShoppingOutlined className="text-2xl text-emerald-500" />}
              valueStyle={{ color: '#10b981', fontWeight: 700 }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title={<span className="text-slate-500 font-medium">Revenue</span>}
              value={revenue}
              prefix={<DollarOutlined className="text-2xl text-amber-500" />}
              suffix={
                <span className="text-xs text-emerald-500 font-medium">
                  <ArrowUpOutlined /> {growth}%
                </span>
              }
              valueStyle={{ color: '#f59e0b', fontWeight: 700 }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title={<span className="text-slate-500 font-medium">Growth Rate</span>}
              value={growth}
              suffix="%"
              prefix={<RiseOutlined className="text-2xl text-pink-500" />}
              valueStyle={{ color: '#ec4899', fontWeight: 700 }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-6">
        <Col xs={24} lg={12}>
          <Card title={<span className="font-semibold">Weekly Users &amp; Orders</span>} variant="borderless">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#667eea" name="Users" radius={[4, 4, 0, 0]} />
                <Bar dataKey="orders" fill="#10b981" name="Orders" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title={<span className="font-semibold">Weekly Trend</span>} variant="borderless">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#667eea" strokeWidth={2} name="Users" />
                <Line type="monotone" dataKey="orders" stroke="#10b981" strokeWidth={2} name="Orders" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
