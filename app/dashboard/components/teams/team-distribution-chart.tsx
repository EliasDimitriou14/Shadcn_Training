"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Delta",
    value: 55,
    color: "#84cc16",
  },
  {
    name: "Alpha",
    value: 34,
    color: "#3b82f6",
  },
  {
    name: "Canary",
    value: 11,
    color: "#f97316",
  },
];

export default function TeamDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={480} height={150}>
        <Tooltip
          labelClassName="font-bold"
          wrapperClassName="[&_.recharts-tooltip-item]:!text-black dark:[&_.recharts-tooltip-item]:!text-white !text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <Pie data={data} dataKey="value" nameKey="name">
          {data.map((dataItems, i) => (
            <Cell key={i} fill={dataItems.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
