import { lusitana } from '../../fonts';
import { fetchRevenue } from '../../lib/data';

export default async function RevenueChart() {
  const revenue = await fetchRevenue();

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  const chartHeight = 350;
  const allValues = revenue.map((r) => r.revenue);
  const maxValue = Math.max(...allValues);

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div
          className="flex items-end gap-2 rounded-md bg-white p-4 md:gap-4"
          style={{ height: `${chartHeight}px` }}
        >
          {revenue.map((r) => (
            <div key={r.month} className="flex flex-col items-center gap-2" style={{ flex: 1 }}>
              <div
                className="w-full rounded-md bg-blue-300"
                style={{ height: `${(r.revenue / maxValue) * chartHeight}px` }}
              />
              <p className="text-sm text-gray-400">{r.month}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}