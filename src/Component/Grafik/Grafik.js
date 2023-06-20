import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 100,
    pv: 70,
  },
  {
    name: 'Page B',
    uv: 400,
    pv: 50,
  },
  {
    name: 'Page C',
    uv: 10,
    pv: 90,
  },
  {
    name: 'Page D',
    uv: 10,
    pv: 90,
  },
];

let arr = data.map((el)=>{
    return [el]
  });
export default class Example extends PureComponent {
  
  render() {
    return (arr.map((el)=><ResponsiveContainer width="100%" height="100%">
        <BarChart
         layout="vertical"
          width={300}
          height={300}
          data={el}
          margin={{
            top: 25,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" hide/>
          <YAxis dataKey="name" type='category'/>
          <Legend/>
          <Bar dataKey="pv" stackId="a" fill="#8884d8"/>
          <Bar dataKey="uv" stackId="b" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>)
      
    );
  }
}
