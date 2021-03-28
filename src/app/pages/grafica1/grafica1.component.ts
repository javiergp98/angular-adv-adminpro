import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  // Doughnut
  public labels1: Label[] = ['Pan', 'Refresco', 'Tacos'];
  public data1: MultiDataSet = [
    [10, 45, 15],
  ];

  public labels2: Label[] = ['Tomate', 'Lechuga', 'Cebolla'];
  public data2: MultiDataSet = [
    [7, 25, 5],
  ];

  public labels3: Label[] = ['Cocacola', 'Fanta', 'Nestea'];
  public data3: MultiDataSet = [
    [555, 453, 154],
  ];

  public labels4: Label[] = ['Rock', 'Indie', 'Trap'];
  public data4: MultiDataSet = [
    [10444, 4551, 152221],
  ];
  // public colors: Color[] = [
  //   {
  //     backgroundColor: [
  //       '#6587e6',
  //       '#009fee',
  //       '#f02059'
  //     ]
  //   }
  // ];

  // public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }

    // // events
    // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //   console.log(event, active);
    // }

    // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //   console.log(event, active);
    // }

}
