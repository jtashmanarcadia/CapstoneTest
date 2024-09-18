import React from "react";
import Appointments from "./Appointments";
import Tasks from "./Tasks";
import Alerts from "./Alerts";
import QuickAccessToolbar from "./QuickAccessToolbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">EMR Dashboard</h1>
      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Appointments, Tasks, Alerts */}
        <Appointments />
        <Tasks />
        <Alerts />
      </div>
      {/* Quick Access Toolbar */}
      <QuickAccessToolbar />
    </div>
  );
};

export default Dashboard;
