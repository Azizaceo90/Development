import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import ProgressCard from "@/components/ProgressCard";
import SectionHeader from "@/components/SectionHeader";

type Sub = {
  name: string;
  cadence: "Weekly" | "Bi-weekly" | "Monthly" | "Quarterly";
  price: number;
  targetSubs: number;
  whatYouGet: string;
  whoBuys: string;
  margin: string;
};

const subscriptions: Sub[] = [
  {
    name: "Egg Share",
    cadence: "Weekly",
    price: 9,
    targetSubs: 80,
    whatYouGet: "1 dozen pasture-raised eggs / week, pickup or porch drop.",
    whoBuys: "Young families, fitness clients, Muslim households.",
    margin: "~65%",
  },
  {
    name: "Halal Chicken Box",
    cadence: "Monthly",
    price: 89,
    targetSubs: 60,
    whatYouGet: "2 whole pasture-raised chickens, halal-slaughtered, vacuum-sealed.",
    whoBuys: "Local masjid families, halal restaurants, fitness clients.",
    margin: "~55%",
  },
  {
    name: "Honey of the Month Club",
    cadence: "Monthly",
    price: 39,
    targetSubs: 100,
    whatYouGet: "2 × 16oz jars raw single-source honey, rotating wildflower / clover / orange-blossom.",
    whoBuys: "Gift buyers, cafés, biohackers, dawah dinners.",
    margin: "~70%",
  },
  {
    name: "Raw Milk Herdshare",
    cadence: "Weekly",
    price: 65,
    targetSubs: 30,
    whatYouGet: "1 gallon raw goat or cow milk / week (herdshare contract — legal in most states).",
    whoBuys: "Crunchy moms, gut-health crowd, raw-dairy advocates.",
    margin: "~40% (feed-heavy)",
  },
  {
    name: "Sunnah Box",
    cadence: "Monthly",
    price: 79,
    targetSubs: 75,
    whatYouGet: "Honey, dates, black seed oil, olive oil, raw garlic, miswak — all sunnah foods.",
    whoBuys: "Muslim families, Ramadan/Eid gifting, dawah outreach.",
    margin: "~50%",
  },
  {
    name: "Quarter-Cow Meat Share",
    cadence: "Quarterly",
    price: 1450,
    targetSubs: 12,
    whatYouGet: "~110 lbs assorted cuts — steaks, ground, roasts, organs. Frozen, halal.",
    whoBuys: "Large families, restaurants, meal-prep clients.",
    margin: "~45%",
  },
  {
    name: "Farmstand Veggie CSA",
    cadence: "Weekly",
    price: 42,
    targetSubs: 60,
    whatYouGet: "Seasonal produce box, 7-9 items, May–October (24 weeks).",
    whoBuys: "Health-conscious locals, restaurants on side.",
    margin: "~50%",
  },
  {
    name: "Sourdough & Bake",
    cadence: "Weekly",
    price: 18,
    targetSubs: 50,
    whatYouGet: "1 loaf naturally-leavened sourdough + a seasonal pastry.",
    whoBuys: "Coffee shops, weekend brunch crowd, gluten-sensitive folks.",
    margin: "~60%",
  },
  {
    name: "Bulk Halal Meat Pro",
    cadence: "Monthly",
    price: 249,
    targetSubs: 35,
    whatYouGet: "20 lbs assorted halal cuts (chicken, beef, lamb) — restaurant or large-family tier.",
    whoBuys: "Halal restaurants, masjid kitchens, big families.",
    margin: "~45%",
  },
];

const monthlyValue = (s: Sub) => {
  switch (s.cadence) {
    case "Weekly":
      return s.price * 4.33;
    case "Bi-weekly":
      return s.price * 2.17;
    case "Monthly":
      return s.price;
    case "Quarterly":
      return s.price / 3;
  }
};

const oneOffs = [
  { name: "Eggs (dozen) — walk-up", price: 9, monthlyUnits: 250, notes: "Farmstand + market." },
  { name: "Whole Chicken — walk-up", price: 32, monthlyUnits: 60, notes: "Cash & carry, halal." },
  { name: "Raw Honey 16oz", price: 22, monthlyUnits: 180, notes: "Wholesale tier at 50+ jars." },
  { name: "Bone broth (qt)", price: 18, monthlyUnits: 120, notes: "Made from spent hens + beef bones — zero waste." },
  { name: "Tallow / Lard (16oz)", price: 16, monthlyUnits: 90, notes: "Rendered from cow share trim." },
  { name: "Beeswax candles (pair)", price: 24, monthlyUnits: 60, notes: "By-product of honey — 70%+ margin." },
  { name: "Date / honey gift box", price: 65, monthlyUnits: 40, notes: "Ramadan / Eid / corporate gifts." },
];

type Buy = {
  item: string;
  unit: string;
  low: number;
  high: number;
  qty: number;
  notes: string;
};

const livestock: Buy[] = [
  {
    item: "Laying hens (started pullets, 16–20wk)",
    unit: "per bird",
    low: 20,
    high: 30,
    qty: 100,
    notes: "Lays in ~2–4 weeks. Buy 100 for 70+ dozen eggs/week at peak.",
  },
  {
    item: "Day-old chicks (laying breeds)",
    unit: "per chick",
    low: 3,
    high: 6,
    qty: 200,
    notes: "Cheaper but 5 months to lay. Buy from Murray McMurray, Meyer, or Cackle.",
  },
  {
    item: "Broiler chicks (Cornish Cross or Freedom Ranger)",
    unit: "per chick",
    low: 2,
    high: 4,
    qty: 300,
    notes: "8–10 week grow-out → halal slaughter. Run 4 batches/year.",
  },
  {
    item: "Bred dairy goat (Nubian / Saanen / Nigerian)",
    unit: "per doe",
    low: 400,
    high: 900,
    qty: 8,
    notes: "8 does = ~16 gal/wk milk. Nigerian Dwarf cheaper, Saanen highest yield.",
  },
  {
    item: "Buckling (breeding male goat)",
    unit: "per buck",
    low: 250,
    high: 500,
    qty: 1,
    notes: "Or rent a buck for breeding season — cheaper.",
  },
  {
    item: "Bottle calf (dairy steer for beef)",
    unit: "per calf",
    low: 150,
    high: 400,
    qty: 4,
    notes: "18–24 months to finish. Cheapest entry to beef.",
  },
  {
    item: "Weaned beef calf (Angus / Hereford)",
    unit: "per head",
    low: 800,
    high: 1500,
    qty: 4,
    notes: "12–14 months to finish. Faster path to meat shares.",
  },
  {
    item: "Bred dairy cow (Jersey / Guernsey)",
    unit: "per cow",
    low: 2000,
    high: 4000,
    qty: 2,
    notes: "Each gives 4–6 gal/day. Powers raw milk herdshare + cheese.",
  },
  {
    item: "Ewe lambs (Katahdin hair sheep — easy keepers)",
    unit: "per ewe",
    low: 250,
    high: 450,
    qty: 10,
    notes: "Halal lamb market. Katahdins shed — no shearing.",
  },
];

const bees: Buy[] = [
  {
    item: "3-lb package bees + mated queen",
    unit: "per package",
    low: 150,
    high: 200,
    qty: 10,
    notes: "Cheapest start. Order Jan–Feb for April pickup.",
  },
  {
    item: "5-frame nucleus colony (nuc)",
    unit: "per nuc",
    low: 200,
    high: 280,
    qty: 10,
    notes: "Recommended — faster honey production than packages.",
  },
  {
    item: "Hive setup (deep + 2 supers + frames + foundation)",
    unit: "per hive",
    low: 220,
    high: 320,
    qty: 10,
    notes: "Mann Lake, Dadant, or build yourself for ~$120.",
  },
  {
    item: "Beekeeping kit (suit, smoker, hive tool, brush)",
    unit: "one-time",
    low: 200,
    high: 350,
    qty: 1,
    notes: "Buy once, lasts years.",
  },
  {
    item: "Honey extractor (2-frame manual)",
    unit: "one-time",
    low: 250,
    high: 500,
    qty: 1,
    notes: "Or rent from local beekeeping co-op first year.",
  },
];

const infrastructure: Buy[] = [
  { item: "Chicken coop + run (100 hens)", unit: "build", low: 3000, high: 8000, qty: 1, notes: "DIY low, prefab high. Mobile tractor cheaper." },
  { item: "Broiler tractor / chicken tractor (Salatin-style)", unit: "build", low: 400, high: 800, qty: 3, notes: "Pasture-rotate broilers. 1 tractor = ~75 birds." },
  { item: "Goat shelter + milking parlor", unit: "build", low: 2500, high: 6000, qty: 1, notes: "Concrete pad + stanchion + wash sink." },
  { item: "Cattle handling + headgate", unit: "build", low: 1500, high: 4000, qty: 1, notes: "Required for vet, AI, halal slaughter." },
  { item: "Fencing (perimeter + paddocks)", unit: "per acre", low: 1500, high: 3500, qty: 10, notes: "High-tensile electric for cattle, woven wire for goats." },
  { item: "Walk-in freezer (8x8) or chest freezers x4", unit: "one-time", low: 2500, high: 6000, qty: 1, notes: "Required for meat share storage." },
  { item: "Refrigerated delivery van (used)", unit: "one-time", low: 8000, high: 18000, qty: 1, notes: "Cargo van + 12V reefer unit. Needed for wholesale routes." },
  { item: "Used compact tractor (25–35 hp)", unit: "one-time", low: 8000, high: 18000, qty: 1, notes: "Kubota / Mahindra. Loader + brush hog attachments." },
  { item: "Egg washer + grader", unit: "one-time", low: 800, high: 2500, qty: 1, notes: "Required for retail sale in most states." },
  { item: "Mobile poultry processing unit (MPPU)", unit: "one-time", low: 4000, high: 12000, qty: 1, notes: "Or rent from state co-op. Halal-compliant setup." },
];

const wholesale = [
  { partner: "Local halal restaurants", offer: "Bulk Halal Meat Pro + weekly egg drops", est: "$3-5K/mo" },
  { partner: "Coffee shops / cafés", offer: "Sourdough & Bake delivery + honey jars", est: "$1-2K/mo" },
  { partner: "Masjid kitchens", offer: "Halal meat for Jumu'ah meals + Ramadan iftars", est: "$2-4K/mo" },
  { partner: "Meal-prep companies", offer: "Pasture chicken + eggs in volume", est: "$3-6K/mo" },
  { partner: "Gyms / fitness coaches", offer: "Affiliate egg + chicken shares to clients", est: "$1-3K/mo" },
];

const sumBuys = (list: Buy[]) => ({
  low: list.reduce((s, b) => s + b.low * b.qty, 0),
  high: list.reduce((s, b) => s + b.high * b.qty, 0),
});

export default function Farm() {
  const subsMRR = subscriptions.reduce((s, x) => s + monthlyValue(x) * x.targetSubs, 0);
  const oneOffMonthly = oneOffs.reduce((s, p) => s + p.price * p.monthlyUnits, 0);
  const wholesaleLow = 10_000;
  const wholesaleHigh = 20_000;
  const totalLow = subsMRR + oneOffMonthly + wholesaleLow;
  const totalHigh = subsMRR + oneOffMonthly + wholesaleHigh;
  const totalSubs = subscriptions.reduce((s, x) => s + x.targetSubs, 0);

  const livestockCost = sumBuys(livestock);
  const beesCost = sumBuys(bees);
  const infraCost = sumBuys(infrastructure);
  const startupLow = livestockCost.low + beesCost.low + infraCost.low;
  const startupHigh = livestockCost.high + beesCost.high + infraCost.high;

  return (
    <>
      <Topbar
        title="Farm Sales"
        subtitle="Real subscription stack — eggs, chicken, honey, milk, meat, sunnah box, bread, CSA."
      />

      <section className="section-grid">
        <StatCard label="Subscription MRR (target)" value={`$${Math.round(subsMRR).toLocaleString()}`} accent="emerald" hint={`${totalSubs} subscribers at full ramp`} />
        <StatCard label="One-off Monthly (target)" value={`$${oneOffMonthly.toLocaleString()}`} accent="gold" hint="Farmstand + market + walk-ups" />
        <StatCard label="Wholesale Monthly" value={`$${wholesaleLow.toLocaleString()}–${wholesaleHigh.toLocaleString()}`} accent="violet" hint="Restaurants, masjid, meal-prep" />
        <StatCard label="Total Projected" value={`$${Math.round(totalLow).toLocaleString()}–${Math.round(totalHigh).toLocaleString()}/mo`} accent="sky" hint={`≈ $${Math.round(((totalLow + totalHigh) / 2) * 12 / 1000)}K/yr`} />
      </section>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <ProgressCard title="Active subscribers" current={0} target={totalSubs} unit="subs" caption="Sum of all 9 subscription targets." />
        <ProgressCard title="Subscription MRR" current={0} target={Math.round(subsMRR)} caption="Recurring revenue is the moat — protects against weather + market dips." />
      </div>

      <div className="mt-10">
        <SectionHeader
          title="Subscriptions you can add"
          description="9 recurring offers, real pricing benchmarks. Margin estimates pre-labor."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {subscriptions.map((s) => {
            const mv = monthlyValue(s);
            return (
              <div key={s.name} className="card card-hover">
                <div className="flex items-center justify-between">
                  <div className="label">{s.cadence}</div>
                  <span className="chip">{s.margin} margin</span>
                </div>
                <div className="text-lg font-semibold text-white mt-1">{s.name}</div>
                <div className="mt-2 flex items-baseline gap-2">
                  <div className="metric text-2xl">${s.price}</div>
                  <div className="text-xs text-gray-400">/ {s.cadence.toLowerCase()}</div>
                </div>
                <p className="mt-3 text-sm text-gray-300">{s.whatYouGet}</p>
                <p className="mt-2 text-xs text-gray-400">Who buys: {s.whoBuys}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-ink-800 px-3 py-2">
                    <div className="label">Target subs</div>
                    <div className="text-white mt-0.5">{s.targetSubs}</div>
                  </div>
                  <div className="rounded-lg bg-ink-800 px-3 py-2">
                    <div className="label">MRR at target</div>
                    <div className="text-accent-emerald mt-0.5">
                      ${Math.round(mv * s.targetSubs).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <SectionHeader title="One-off products" description="Farmstand, market, and walk-ups — non-recurring." />
        <div className="card p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-ink-800/60 text-gray-400">
              <tr>
                <th className="text-left px-5 py-3">Product</th>
                <th className="text-left px-5 py-3">Price</th>
                <th className="text-left px-5 py-3">Monthly units</th>
                <th className="text-left px-5 py-3">Monthly revenue</th>
                <th className="text-left px-5 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {oneOffs.map((p) => (
                <tr key={p.name} className="border-t border-ink-700/60">
                  <td className="px-5 py-3 text-white">{p.name}</td>
                  <td className="px-5 py-3">${p.price}</td>
                  <td className="px-5 py-3">{p.monthlyUnits}</td>
                  <td className="px-5 py-3 text-accent-emerald">
                    ${(p.price * p.monthlyUnits).toLocaleString()}
                  </td>
                  <td className="px-5 py-3 text-gray-400">{p.notes}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-ink-700/60 bg-ink-800/40">
                <td className="px-5 py-3 text-gray-400" colSpan={3}>Total one-off / month</td>
                <td className="px-5 py-3 text-white font-semibold">${oneOffMonthly.toLocaleString()}</td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="mt-10">
        <SectionHeader
          title="Startup costs — what to buy"
          description="Real 2025 prices for livestock, bees, and infrastructure. Low / high range for budget planning."
        />
        <div className="grid gap-4 sm:grid-cols-3 mb-5">
          <div className="card">
            <div className="label">Livestock total</div>
            <div className="metric mt-1 text-2xl">
              ${livestockCost.low.toLocaleString()} – ${livestockCost.high.toLocaleString()}
            </div>
          </div>
          <div className="card">
            <div className="label">Bees + apiary total</div>
            <div className="metric mt-1 text-2xl">
              ${beesCost.low.toLocaleString()} – ${beesCost.high.toLocaleString()}
            </div>
          </div>
          <div className="card">
            <div className="label">Infrastructure total</div>
            <div className="metric mt-1 text-2xl">
              ${infraCost.low.toLocaleString()} – ${infraCost.high.toLocaleString()}
            </div>
          </div>
        </div>
        <div className="card mb-6 flex items-center justify-between">
          <div>
            <div className="label">All-in startup capital</div>
            <p className="text-xs text-gray-400 mt-1">Lean build → fully outfitted operation.</p>
          </div>
          <div className="metric text-3xl">
            ${startupLow.toLocaleString()} – ${startupHigh.toLocaleString()}
          </div>
        </div>

        <SectionHeader title="Livestock" />
        <div className="card p-0 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead className="bg-ink-800/60 text-gray-400">
              <tr>
                <th className="text-left px-5 py-3">Animal</th>
                <th className="text-left px-5 py-3">Price range</th>
                <th className="text-left px-5 py-3">Qty</th>
                <th className="text-left px-5 py-3">Subtotal</th>
                <th className="text-left px-5 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {livestock.map((b) => (
                <tr key={b.item} className="border-t border-ink-700/60">
                  <td className="px-5 py-3 text-white">{b.item}</td>
                  <td className="px-5 py-3">${b.low}–${b.high} <span className="text-gray-500 text-xs">/ {b.unit}</span></td>
                  <td className="px-5 py-3">{b.qty}</td>
                  <td className="px-5 py-3 text-accent-emerald">
                    ${(b.low * b.qty).toLocaleString()}–${(b.high * b.qty).toLocaleString()}
                  </td>
                  <td className="px-5 py-3 text-gray-400">{b.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SectionHeader title="Bees & apiary" />
        <div className="card p-0 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead className="bg-ink-800/60 text-gray-400">
              <tr>
                <th className="text-left px-5 py-3">Item</th>
                <th className="text-left px-5 py-3">Price range</th>
                <th className="text-left px-5 py-3">Qty</th>
                <th className="text-left px-5 py-3">Subtotal</th>
                <th className="text-left px-5 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {bees.map((b) => (
                <tr key={b.item} className="border-t border-ink-700/60">
                  <td className="px-5 py-3 text-white">{b.item}</td>
                  <td className="px-5 py-3">${b.low}–${b.high} <span className="text-gray-500 text-xs">/ {b.unit}</span></td>
                  <td className="px-5 py-3">{b.qty}</td>
                  <td className="px-5 py-3 text-accent-emerald">
                    ${(b.low * b.qty).toLocaleString()}–${(b.high * b.qty).toLocaleString()}
                  </td>
                  <td className="px-5 py-3 text-gray-400">{b.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SectionHeader title="Infrastructure & equipment" />
        <div className="card p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-ink-800/60 text-gray-400">
              <tr>
                <th className="text-left px-5 py-3">Item</th>
                <th className="text-left px-5 py-3">Price range</th>
                <th className="text-left px-5 py-3">Qty</th>
                <th className="text-left px-5 py-3">Subtotal</th>
                <th className="text-left px-5 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {infrastructure.map((b) => (
                <tr key={b.item} className="border-t border-ink-700/60">
                  <td className="px-5 py-3 text-white">{b.item}</td>
                  <td className="px-5 py-3">${b.low.toLocaleString()}–${b.high.toLocaleString()} <span className="text-gray-500 text-xs">/ {b.unit}</span></td>
                  <td className="px-5 py-3">{b.qty}</td>
                  <td className="px-5 py-3 text-accent-emerald">
                    ${(b.low * b.qty).toLocaleString()}–${(b.high * b.qty).toLocaleString()}
                  </td>
                  <td className="px-5 py-3 text-gray-400">{b.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Prices are 2025 US averages from hatcheries (Murray McMurray, Meyer, Cackle), beekeeping suppliers
          (Mann Lake, Dadant), livestock auctions, and Tractor Supply / used markets. Verify locally before purchase.
        </p>
      </div>

      <div className="mt-10">
        <SectionHeader title="Wholesale partners" description="High-ticket recurring contracts — 5–10 of these = $10K+/mo on their own." />
        <div className="card p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-ink-800/60 text-gray-400">
              <tr>
                <th className="text-left px-5 py-3">Partner type</th>
                <th className="text-left px-5 py-3">Offer</th>
                <th className="text-left px-5 py-3">Est. monthly</th>
              </tr>
            </thead>
            <tbody>
              {wholesale.map((w) => (
                <tr key={w.partner} className="border-t border-ink-700/60">
                  <td className="px-5 py-3 text-white">{w.partner}</td>
                  <td className="px-5 py-3 text-gray-300">{w.offer}</td>
                  <td className="px-5 py-3 text-accent-emerald">{w.est}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="card">
          <SectionHeader title="Distribution channels" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Farmstand pickup (Square + cash)</li>
            <li>• Weekly farmer's market booth</li>
            <li>• Shopify subscriptions (recurring billing)</li>
            <li>• Porch drop within 10-mile radius</li>
            <li>• Wholesale delivery route (restaurants + masjid)</li>
            <li>• Ramadan / Eid bulk pre-orders</li>
          </ul>
        </div>
        <div className="card">
          <SectionHeader title="Compliance checklist" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• State cottage food / dairy / poultry licenses</li>
            <li>• USDA exemption (under-1,000 birds — verify locally)</li>
            <li>• Raw milk: herdshare contract template (NOT direct retail in most states)</li>
            <li>• Honey labeling: net weight, source, producer name + address</li>
            <li>• Halal certification or documented dhabiha protocol</li>
            <li>• $1M general liability insurance</li>
            <li>• Refrigerated delivery vehicle for meat/dairy routes</li>
          </ul>
        </div>
      </div>
    </>
  );
}
