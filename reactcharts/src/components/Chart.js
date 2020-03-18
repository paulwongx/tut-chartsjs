import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }

  static defaultProps ={
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'bottom',
    location: 'City'
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{ 
            title: {
              display: this.props.displayTitle,
              text: `Largest Cities In ${this.props.location}`,
              fontsize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels:{
                fontColor: '#000'
              }
            },
          }}
        />
        <Line
          data={this.state.chartData}
          options={{ 
            title: {
              display: this.props.displayTitle,
              text: `Largest Cities In ${this.props.location}`,
              fontsize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels:{
                fontColor: '#000'
              }
            },
          }}
        />
        <Pie
          data={this.state.chartData}
          options={{ 
            title: {
              display: this.props.displayTitle,
              text: `Largest Cities In ${this.props.location}`,
              fontsize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels:{
                fontColor: '#000'
              }
            },
          }}
        />
      </div>
    )
  }
}


export default Chart;