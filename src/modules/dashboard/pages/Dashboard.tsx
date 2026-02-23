import DashboardStats from '@organisms/DashboardStats';
import DashboardCharts from '@organisms/DashboardCharts';
import { chartData, dashboardStats } from '../mock';

export default function Dashboard() {
  const { totalUsers, totalOrders, revenue, growth } = dashboardStats;

  return (
    <div className="animate-slide-up">
      <DashboardStats
        totalUsers={totalUsers}
        totalOrders={totalOrders}
        revenue={revenue}
        growth={growth}
      />
      <DashboardCharts data={chartData} />
    </div>
  );
}
