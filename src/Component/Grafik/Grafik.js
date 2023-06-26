import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



export default function Grafik(data) {
  return (
    <>
      {data.data.map((el) => {
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              width={250}
              height={300}
              data={el.answers}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" hide />
              <YAxis dataKey="title" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" stackId="a" fill="#9ACF59" label name="Количество" />
            </BarChart>
          </ResponsiveContainer>
        );
      })}
    </>
  );
}