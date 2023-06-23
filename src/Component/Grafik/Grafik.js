import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {data} from '../../utils/constants';

// let arr = data.map((el)=>{
//     console.log(el.answers[0].count);
//     return [el];
//   });
export default class Grafik extends PureComponent {
  
  render() {
    return (data.map((el)=>
    <ResponsiveContainer width="100%" height="100%">
        {console.log(el)}
        <BarChart
         layout="vertical"
          width={250}
          height={300}
          data={el}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" hide/>
          <YAxis dataKey={el.answers[0].title} type='category'/>
          <Legend/>
          <Bar dataKey={el.answers[0].count} stackId="a" fill="#9ACF59"/>
          <Bar dataKey={el.answers[0].count} stackId="b" fill="#A09AFD" />
          <Bar dataKey={el.answers[0].count} stackId="c" fill="#FACC5C" />
        </BarChart>
      </ResponsiveContainer>)
      
    );
  }
}
