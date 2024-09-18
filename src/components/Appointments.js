import React from "react";

const appointments = [
  { id: 1, name: "John Doe", age: 45, complaint: "Fever", status: "Checked In" },
  { id: 2, name: "Jane Smith", age: 30, complaint: "Headache", status: "Waiting" },
  { id: 3, name: "Mike Davis", age: 55, complaint: "Back Pain", status: "Completed" },
];

const Appointments = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Today's Appointments</h2>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id} className="mb-3">
            <button className="w-full text-left px-4 py-2 border rounded-lg hover:bg-gray-100">
              <div className="flex justify-between">
                <span>{appt.name}, {appt.age} - {appt.complaint}</span>
                <span className={`text-sm ${appt.status === 'Completed' ? 'text-green-600' : 'text-yellow-500'}`}>
                  {appt.status}
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
