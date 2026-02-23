import AppCard from '@atoms/AppCard';
import AppCol from '@atoms/AppCol';
import AppRow from '@atoms/AppRow';
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

interface ChartDataPoint {
  name: string;
  users: number;
  orders: number;
}

interface DashboardChartsProps {
  data: ChartDataPoint[];
}

export default function DashboardCharts({ data }: DashboardChartsProps) {
  return (
    <AppRow gutter={[20, 20]} className="mt-6">
      <AppCol xs={24} lg={12}>
        <AppCard title={<span className="font-semibold">Weekly Users &amp; Orders</span>} variant="borderless">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#667eea" name="Users" radius={[4, 4, 0, 0]} />
              <Bar dataKey="orders" fill="#10b981" name="Orders" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </AppCard>
      </AppCol>
      <AppCol xs={24} lg={12}>
        <AppCard title={<span className="font-semibold">Weekly Trend</span>} variant="borderless">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#667eea" strokeWidth={2} name="Users" />
              <Line type="monotone" dataKey="orders" stroke="#10b981" strokeWidth={2} name="Orders" />
            </LineChart>
          </ResponsiveContainer>
        </AppCard>
      </AppCol>
    </AppRow>
  );
}
