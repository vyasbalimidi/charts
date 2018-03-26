import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { DldGraphComponent } from './components/dld-graph/dld-graph.component';
import { EcoService } from './services/eco.service';
import { ChartSamplesComponent } from './chart-samples/chart-samples.component';

@NgModule({
  declarations: [
    AppComponent,
    DldGraphComponent,
    ChartSamplesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ChartsModule
  ],
  providers: [EcoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
