import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent implements OnInit {
  @Input() title: string = 'Sin título';
  @Input() labels: Label[] = ['Label1','Label2','Label3'];
  @Input() data: MultiDataSet = [
    [350, 450, 100],
  ];

  // Doughnut
  public colors: Color[] = [
    {
      backgroundColor: [
        '#6587e6',
        '#009fee',
        '#f02059'
      ]
    }
  ];

  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
