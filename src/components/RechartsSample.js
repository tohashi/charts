// @flow

import React from 'react';
import {
  BarChart,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Bar,
  Tooltip,
  CartesianGrid,
  Line
} from 'recharts';
import data from '../data';

export default function RechartsSample() {
  return (
    <div>
      <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="value1" stroke="#8884d8" />
        <Line type="linear" dataKey="value2" stroke="#82ca9d" />
      </LineChart>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value1" fill="#8884d8" />
        <Bar dataKey="value2" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
