import { Component, OnInit } from '@angular/core';

import { EcoService } from '../../services/eco.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { Chart } from 'chart.js';
import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-eco-graph',
  templateUrl: './eco-graph.component.html',
  styleUrls: ['./eco-graph.component.css']
})
export class EcoGraphComponent implements OnInit {
  constructor(
    private service: EcoService,
    private spinner: NgxSpinnerService
  ) { }

  // Pie
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
    this.spinner.show()
    this.service.downloadEcos()
      .subscribe(ecos => {
        // Hide spinner
        this.spinner.hide()

        // Display ECO graph
        if (Array.isArray(ecos)) {
          let ecoNumbers = Array.from(ecos).map(eco => eco.eco_number)
          var map = new Map()

          for (const ecoNumber of ecoNumbers) {
            let first3 = ecoNumber.substr(0, 3)
            let count = map.get(first3)

            if (count == null) {
              map.set(first3, 0)
            } else {
              map.set(first3, count + 1)
            }
          }

          var labels: string[] = [];
          var data: number[] = [];

          map.forEach((value, key) => {
            if (value > 50) {
              labels.push(key)
              data.push(value)
            }
          })

          this.pieChartData = data
          setTimeout(() => this.pieChartLabels = labels);
        }
      })
  }
}
