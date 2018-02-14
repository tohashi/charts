// @flow

import React from 'react';
import {
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryBar
} from 'victory';
import data from '../data';

export default function VictorySample() {
  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        domain={{ y: [0.5, 5.5] }}
      >
        <VictoryGroup
          vertical
          offset={10}
          style={{ data: { width: 6 } }}
          colorScale={["brown", "tomato" ]}
        >
          <VictoryBar
            data={[
              { x: 1, y: 1 },
              { x: 2, y: 2 },
              { x: 3, y: 3 },
              { x: 4, y: 2 },
              { x: 5, y: 1 }
            ]}
          />
          <VictoryBar
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 4 },
              { x: 4, y: 5 },
              { x: 5, y: 5 }
            ]}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}
