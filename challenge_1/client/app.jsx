import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Chart from './comps/chart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };

    this.toMonthString = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    };
  }

  componentWillMount() {
    const dates = [];
    const BTCprices = [];
    const LTCprices = [];

    const btc = new Promise((resolve, reject) => {
      $.get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=90', (data) => {
        const btcData = data.Data;

        resolve(btcData);
      });
    });

    const ltc = new Promise((resolve, reject) => {
      $.get('https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=90', (data) => {
        const ltcData = data.Data;

        resolve(ltcData);
      });
    });

    Promise.all([btc, ltc]).then((promises) => {
      const btcData = promises[0];
      const ltcData = promises[1];

      for (let i = 0; i < btcData.length; i++) {
        const converted = new Date(btcData[i].time * 1000);
        const year = converted.getFullYear();
        const month = this.toMonthString[converted.getMonth()];
        const day = converted.getDate();

        const price = btcData[i].close;

        dates.push(`${month} ${day}, ${year}`);
        BTCprices.push(price);
      }

      for (let i = 0; i < ltcData.length; i++) {
        const converted = new Date(ltcData[i].time * 1000);
        const year = converted.getFullYear();
        const month = this.toMonthString[converted.getMonth()];
        const day = converted.getDate();

        const price = ltcData[i].close;

        LTCprices.push(price);
      }

      this.setState({
        chartData: {
          labels: dates,
          datasets: [{
            label: 'BTC',
            borderColor: 'red',
            // backgroundColor: 'rgba(255, 0, 0, 0.3)',
            data: BTCprices,
          },
          {
            label: 'LTC',
            borderColor: 'green',
            // backgroundColor: 'rgba(0, 255, 0, 0.3)',
            data: LTCprices,
          }],
        },
      });
    });
  }

  render() {
    return (
      <div id="title-bar">
        <h1>Crypto Craaaazy</h1>
        <Chart data={this.state.chartData} />
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
