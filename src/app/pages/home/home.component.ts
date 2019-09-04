import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {display: false},
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
        },
      }],
      xAxes: [{
        gridLines: {
          display: false,
        },
      }]
    },
  };
  public barChartLabels = ['222', '428', '492', '471', '413', '344', '294'];
  public barChartType = 'bar';

  public barChartData = [
    {data: [222, 428, 492, 471, 413, 344, 294]},
  ];
  public barChartColors: Color[] = [
    { backgroundColor: 'rgb(66, 165, 245)' }
  ];
  public barChartColors2: Color[] = [
    { backgroundColor: 'rgb(244, 67, 54)' }
  ];


  public barChartTypeline = 'line';
  constructor() { }

  ngOnInit() {
  }

}
