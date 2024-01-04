import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const Analytics = (): JSX.Element => {
  const data = [
    { day: "Monday", minutesWorked: 60 },
    { day: "Tuesday", minutesWorked: 75 },
    { day: "Wednesday", minutesWorked: 60 },
    { day: "Thursday", minutesWorked: 80 },
    { day: "Friday", minutesWorked: 0 },
    { day: "Saturday", minutesWorked: 60 },
    { day: "Sunday", minutesWorked: 0 },
  ];

  const totalMinutes = data.reduce(
    (acc, current) => acc + current.minutesWorked,
    0
  );

  return (
    <>
      <div className="flex gap-4 pb-10 pt-8">
        <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center">
          This weeks total workout: {totalMinutes} minutes
        </div>
        <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center">
          This weeks total workout: {totalMinutes} minutes
        </div>
        <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center">
          This weeks total workout: {totalMinutes} minutes
        </div>
        <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center">
          This weeks total workout: {totalMinutes} minutes
        </div>
      </div>
      <div className="bg-white rounded-md flex flex-col items-start gap-10 p-2">
        <div className="pl-10 pt-2">
          <h1 className=" text-xl font-medium">This weeks workout</h1>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="minutesWorked" stroke="#8884d8" />
            <ReferenceLine y={60} stroke="red" label="Expected Workout" />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Analytics;
