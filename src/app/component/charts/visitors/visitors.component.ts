import { Component, OnInit } from '@angular/core';
import { Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {display: false},
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
      }]
    },
  };

  public barChartLabels = ['12am', '2am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm'];
  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData = [
    {data: [410, 380, 320, 290, 190, 390, 250, 380, 300, 340, 220, 290]},
    {data: [3000, 3400, 4100, 3800, 2200, 3200, 2900, 1900, 2900, 3900, 2500, 3800]},
  ];

  public barChartColors: Color[] = [
    { backgroundColor: '#3949ab' },
    { backgroundColor: 'rgb(66, 165, 245)' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
