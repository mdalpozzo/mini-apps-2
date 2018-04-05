import React from 'react';
import { Line } from 'react-chartjs-2';

function Chart(props) {
  return (
    <div className="chart">
      <Line data={props.data} />
    </div>
  );
}

export default Chart;
