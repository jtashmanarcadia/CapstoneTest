import React from "react";

const alerts = [
  { id: 1, message: "Critical lab result for John Doe: High potassium level", type: "Critical" },
  { id: 2, message: "Flagged message from Jane Smith: Pain worsening", type: "Flagged" },
];

const Alerts = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Alerts</h2>
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id} className="mb-3">
            <div className={`p-4 border rounded-lg ${alert.type === 'Critical' ? 'bg-red-100' : 'bg-yellow-100'}`}>
              <span className="font-medium">{alert.message}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
