import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import SectionHeader from "@/components/SectionHeader";

const products = [
  {
    name: "Eggs (dozen)",
    unitPrice: 7,
    monthlyUnits: 400,
    notes: "Pasture-raised. Local-only delivery.",
  },
  {
    name: "Whole Chicken",
    unitPrice: 28,
    monthlyUnits: 80,
    notes: "Heritage breed, processed weekly.",
  },
  {
    name: "Raw Honey (16oz)",
    unitPrice: 22,
    monthlyUnits: 120,
    notes: "Single-source apiary. Wholesale tier at 50+ jars.",
  },
  {
    name: "Goat Milk (gal)",
    unitPrice: 12,
    monthlyUnits: 60,
    notes: "Subscription preferred.",
  },
  {
    name: "Beef share (1/4 cow)",
    unitPrice: 1200,
    monthlyUnits: 2,
    notes: "Pre-order, twice yearly.",
  },
];

export default function Farm() {
  const monthly = products.reduce((s, p) => s + p.unitPrice * p.monthlyUnits, 0);
  return (
    <>
      <Topbar
        title="Farm Sales"
        subtitle="Chickens, honey, eggs, milk, beef — direct-to-consumer + wholesale."
      />

      <section className="section-grid">
        <StatCard label="Projected Monthly" value={`$${monthly.toLocaleString()}`} accent="emerald" />
        <StatCard label="Projected Annual" value={`$${(monthly * 12).toLocaleString()}`} accent="gold" />
        <StatCard label="SKUs" value={`${products.length}`} accent="violet" />
        <StatCard label="Subscribers" value="0" accent="sky" hint="Goal: 200" />
      </section>

      <div className="mt-10">
        <SectionHeader title="Product economics" description="Adjust price + volume to project revenue." />
        <div className="card p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-ink-800/60 text-gray-400">
              <tr>
                <th className="text-left px-5 py-3">Product</th>
                <th className="text-left px-5 py-3">Unit price</th>
                <th className="text-left px-5 py-3">Monthly units</th>
                <th className="text-left px-5 py-3">Monthly revenue</th>
                <th className="text-left px-5 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.name} className="border-t border-ink-700/60">
                  <td className="px-5 py-3 text-white">{p.name}</td>
                  <td className="px-5 py-3">${p.unitPrice}</td>
                  <td className="px-5 py-3">{p.monthlyUnits}</td>
                  <td className="px-5 py-3 text-accent-emerald">
                    ${(p.unitPrice * p.monthlyUnits).toLocaleString()}
                  </td>
                  <td className="px-5 py-3 text-gray-400">{p.notes}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-ink-700/60 bg-ink-800/40">
                <td className="px-5 py-3 text-gray-400" colSpan={3}>Total</td>
                <td className="px-5 py-3 text-white font-semibold">${monthly.toLocaleString()}</td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="card">
          <SectionHeader title="Distribution channels" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Farm-stand pickup (cash + Square)</li>
            <li>• Local farmer's markets (weekly)</li>
            <li>• Subscription boxes via Shopify</li>
            <li>• Wholesale to local restaurants + masjid kitchens</li>
            <li>• Bulk holiday orders (Eid, Ramadan)</li>
          </ul>
        </div>
        <div className="card">
          <SectionHeader title="Compliance checklist" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• State cottage food / dairy / poultry licenses</li>
            <li>• USDA exemption (under-1000 birds rule, verify locally)</li>
            <li>• Honey labeling: net weight, source, producer</li>
            <li>• Liability insurance</li>
            <li>• Halal slaughter protocols documented</li>
          </ul>
        </div>
      </div>
    </>
  );
}
