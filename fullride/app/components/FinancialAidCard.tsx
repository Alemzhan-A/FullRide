export default function FinancialAidCard() {
  const items = [
    { name: 'Tuition', amount: 60000 },
    { name: 'Housing', amount: 5000 },
    { name: 'Meal Plan', amount: 4500 },
    { name: 'Health Insurance', amount: 2000 },
    { name: 'Books & Supplies', amount: 1200 },
    { name: 'Personal Expenses', amount: 1000 },
    { name: 'Roundtrip Airfare', amount: 1500 },
  ];

  const total = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold text-black mb-6">FINANCIAL AID</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="flex justify-between items-center">
            <span className="text-black">{item.name}</span>
            <span className="font-medium text-black">${item.amount.toLocaleString()}</span>
          </div>
        ))}
        <div className="border-t border-gray-200 my-4"></div>
        <div className="flex justify-between items-center font-bold text-lg">
          <span className="text-black">TOTAL</span>
          <span className="text-black">${total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
} 