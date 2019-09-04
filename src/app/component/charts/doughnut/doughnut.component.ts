import { Component, OnInit } from '@angular/core';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {
  public barChartOptions = {
    legend: {display: false},
    backgroundColor: [
      '#fff',
      'Yellow',
      'Blue',
    ],
  };




  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3'];
  public doughnutChartData = [6.1, 92.8, 1.1];
  public doughnutChartType = 'doughnut';
  constructor() { }
  public barChartColors: Color[] = [
    { backgroundColor: 'rgb(92, 131, 241)' },
    { backgroundColor: 'rgb(72, 102, 210)' },
    { backgroundColor: 'rgb(137, 170, 244)' }
  ];

  ngOnInit() {
  }

}
