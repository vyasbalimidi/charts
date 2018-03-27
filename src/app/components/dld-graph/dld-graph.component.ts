import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dld-graph',
  templateUrl: './dld-graph.component.html',
  styleUrls: ['./dld-graph.component.css']
})
export class DldGraphComponent implements OnInit {
  public axisX: number[] = []
  public dataSeries: { data: number[], label: string }[] = [
    { data: [], label: 'No Data' }
  ];

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() { }

  onFileSelection(selected: any) {
    let files = selected.target.files

    if (files && files.length > 0) {
      this.spinner.show()

      for (let file of files) {
        this.readFile(file)
      }

      setTimeout(() => {
        this.dataSeries = this.dataSeries.splice(1, files.length)
      });

      this.spinner.hide()
    }
  }

  private readFile(file: any) {
    let filename = file.name
    let reader = new FileReader()

    reader.readAsText(file)
    reader.onload = (e) => {
      // 1. Collect data
      let csv = reader.result
      let allTextLines = csv.split(/\n/)
      let axisX: number[] = []
      let axisY: number[] = []

      // 2. Parse data
      for (let i = 0; i < allTextLines.length; i++) {
        let data = allTextLines[i].split(',');

        axisX.push(Number.parseFloat(data[0]))
        axisY.push(Number.parseFloat(data[1]))
      }

      // 3. Submit data to graphs
      let filenameWithoutExtension = filename.substr(0, filename.length - 4)

      this.axisX = axisX
      this.dataSeries.push({ data: axisY, label: filenameWithoutExtension })
    }
  }
}