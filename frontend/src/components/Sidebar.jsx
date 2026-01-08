function Sidebar() {
  return (
    <aside className="w-64 bg-indigo-600 text-white p-5">
      <h1 className="text-xl font-semibold mb-8">AlgoDealer.ai</h1>

      <nav className="space-y-4">
        <p className="font-medium bg-indigo-700 p-2 rounded">Dashboard</p>
        <p className="opacity-80">Strategies</p>
        <p className="opacity-80">Live Positions</p>
        <p className="opacity-80">Order Book</p>
        <p className="opacity-80">Brokers</p>
      </nav>
    </aside>
  );
}

export default Sidebar;
