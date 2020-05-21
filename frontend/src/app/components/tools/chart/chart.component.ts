import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {

  @Input() labels: Label[];
  @Input() data: number[];
  @Input() backgroundColors: string[] = ['#ff849d', '#64b5ef', '#ffd77b', '#74cdcc', '#ae85ff', '#ffb26a'];


  // Pie
  public pieChartOptions: ChartOptions = {
    aspectRatio: 1,
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => ctx.chart.data.labels[ctx.dataIndex],
        color: 'white'
      },
    }
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: this.backgroundColors
    },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    this.pieChartColors = [
      {
        backgroundColor: this.backgroundColors
      },
    ];
  }
}
