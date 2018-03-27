import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dld-graph',
  templateUrl: './dld-graph.component.html',
  styleUrls: ['./dld-graph.component.css']
})
export class DldGraphComponent implements OnInit {
  fileRead: any
  public axisX: number[] = [];
  public dataSeries: any[] = [
    { data: [], label: 'First Run' }
  ];

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() { }

  convertFile(csv: any) {
    this.spinner.show()
    this.fileRead = csv.target.files[0]

    let reader = new FileReader()
    reader.readAsText(this.fileRead)

    reader.onload = (e) => {
      let csv: string = reader.result
      let allTextLines = csv.split(/\n/)
      let axisX: number[] = []
      let axisY: number[] = []

      for (let i = 0; i < allTextLines.length; i++) {
        let data = allTextLines[i].split(',');

        axisX.push(Number.parseFloat(data[0]))
        axisY.push(Number.parseFloat(data[1]))
      }

      this.axisX = axisX
      setTimeout(() => {
        this.dataSeries[0].data = axisY
        this.dataSeries = this.dataSeries.slice()
      });
      this.spinner.hide()
    }
  }
}