import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-samples',
  templateUrl: './chart-samples.component.html',
  styleUrls: ['./chart-samples.component.css']
})
export class ChartSamplesComponent {
  public chartLabels: any[] = ['Week - 1', 'Week - 2', 'Week - 3', "Week - 4", "Week - 5"];

  public initialChartData: number[] = [65, 59, 80, 81, 56];
  public chartData: number[] = this.initialChartData.slice()
  public chartDataSeries: any[] = [
    { data: this.chartData, label: 'January' },
    { data: this.initialChartData, label: 'February' }
  ];

  onApply(): void {
    this.chartData = this.chartData.slice()
    this.chartDataSeries[0].data = this.chartData
    this.chartDataSeries = this.chartDataSeries.slice()
  }
}
