import React from "react";

const tasks = [
  { id: 1, description: "Follow up on medication refill for John Doe", due: "Due Today" },
  { id: 2, description: "Review lab results for Jane Smith", due: "Due Tomorrow" },
  { id: 3, description: "Schedule follow-up appointment for Mike Davis", due: "Overdue" },
];

const Tasks = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Pending Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-3">
            <div className="p-4 border rounded-lg hover:bg-gray-100">
              <div className="flex justify-between">
                <span>{task.description}</span>
                <span className={`text-sm ${task.due === 'Overdue' ? 'text-red-600' : 'text-yellow-500'}`}>
                  {task.due}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
