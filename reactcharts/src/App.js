import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'



class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData: {}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData: {
        labels: ['Boston1','Worcester','Springfield','Cambridge','Lowell','Brockton'],
        datasets: [{
          label: 'Population',
          data: [679416,185195,154596,115665,111249,95426],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 05)',
            'rgba(255, 159, 64, 0.5)',
          ],
        }],
      }
    })
  }

  render() {
    return (
      <div className="App">
        <body>
          <div id="container">
            <Chart legendPosition="right" location="Massachusetts" chartData={this.state.chartData} />
          </div>
          
        </body>    
      </div>
    );
  }
}

export default App;
