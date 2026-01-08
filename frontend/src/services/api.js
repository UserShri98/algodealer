const BASE_URL = "https://algodealer.onrender.com/";

export async function fetchDashboardSummary() {
  const res = await fetch(`${BASE_URL}/dashboard/summary`);
  if (!res.ok) throw new Error("API Error");
  return res.json();
}
