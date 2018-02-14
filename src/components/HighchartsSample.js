// @flow

import React from 'react';
import Highcharts from 'react-highcharts';
import Highstock from 'react-highcharts/ReactHighstock.src';
import data from '../data';

export default function HighchartsSample() {
  return (
    <div>
      <Highcharts
        config={{
          xAxis: {
            categories: data.map(d => d.name)
          },
          series: [
            {
              data: data.map(d => d.value1)
            },
            {
              data: data.map(d => d.value2)
            }
          ]
        }}
      />
      <Highstock
        config={{
          xAxis: {
            categories: data.map(d => d.name)
          },
          series: [
            {
              data: data.map(d => d.value1)
            },
            {
              data: data.map(d => d.value2)
            }
          ]
        }}
      />
    </div>
  );
}
