const BASE_URL = "http://localhost:5000/api";

export async function fetchDashboardSummary() {
  const res = await fetch(`${BASE_URL}/dashboard/summary`);
  if (!res.ok) throw new Error("API Error");
  return res.json();
}
