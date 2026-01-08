import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import { ShoppingCart, TrendingUp, Wallet, Link } from "lucide-react";
import { fetchDashboardSummary } from "../services/api";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboardSummary().then(setData);
  }, []);

  if (!data) return <p>Loading dashboard...</p>;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Orders"
          value={data.total_orders}
          icon={<ShoppingCart size={16} />}
        />
        <DashboardCard
          title="Total Profit / Loss"
          value={`₹${data.total_profit_loss}`}
          icon={<TrendingUp size={16} />}
        />
        <DashboardCard
          title="Account Balance"
          value={`₹${data.account_balance}`}
          icon={<Wallet size={16} />}
        />
        <DashboardCard
          title="Broker Status"
          value={data.broker_status}
          icon={<Link size={16} />}
        />
      </div>
    </div>
  );
}

export default Dashboard;
