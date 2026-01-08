function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{title}</p>
        <div className="bg-indigo-50 text-indigo-600 p-2 rounded-lg">
          {icon}
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-2">{value}</h2>
    </div>
  );
}

export default DashboardCard;
