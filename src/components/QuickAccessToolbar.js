import React from "react";

const QuickAccessToolbar = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          New Patient Note
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Order Lab Tests
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
          Send Prescription
        </button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
          Send Referral
        </button>
      </div>
    </div>
  );
};

export default QuickAccessToolbar;
