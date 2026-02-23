import { ArrowUpOutlined, ShoppingOutlined, UserOutlined, DollarOutlined, RiseOutlined } from '@ant-design/icons';
import AppCol from '@atoms/AppCol';
import AppRow from '@atoms/AppRow';
import StatCard from '@molecules/StatCard';

interface DashboardStatsProps {
  totalUsers: number;
  totalOrders: number;
  revenue: number;
  growth: number;
}

export default function DashboardStats({ totalUsers, totalOrders, revenue, growth }: DashboardStatsProps) {
  return (
    <AppRow gutter={[20, 20]}>
      <AppCol xs={24} sm={12} lg={6}>
        <StatCard
          title="Total Users"
          value={totalUsers}
          prefix={<UserOutlined className="text-2xl text-primary" />}
          valueColor="#667eea"
          trend={growth}
        />
      </AppCol>
      <AppCol xs={24} sm={12} lg={6}>
        <StatCard
          title="Total Orders"
          value={totalOrders}
          prefix={<ShoppingOutlined className="text-2xl text-emerald-500" />}
          valueColor="#10b981"
        />
      </AppCol>
      <AppCol xs={24} sm={12} lg={6}>
        <StatCard
          title="Revenue"
          value={revenue}
          prefix={<DollarOutlined className="text-2xl text-amber-500" />}
          valueColor="#f59e0b"
          suffix={
            <span className="text-xs text-emerald-500 font-medium">
              <ArrowUpOutlined /> {growth}%
            </span>
          }
        />
      </AppCol>
      <AppCol xs={24} sm={12} lg={6}>
        <StatCard
          title="Growth Rate"
          value={growth}
          prefix={<RiseOutlined className="text-2xl text-pink-500" />}
          valueColor="#ec4899"
          suffix="%"
        />
      </AppCol>
    </AppRow>
  );
}
