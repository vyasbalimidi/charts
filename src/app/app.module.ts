import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChartsModule } from 'ng2-charts';

import { EcoService } from './services/eco.service';

import { AppComponent } from './app.component';
import { DldGraphComponent } from './components/dld-graph/dld-graph.component';
import { ChartSamplesComponent } from './components/chart-samples/chart-samples.component';
import { EcoGraphComponent } from './components/eco-graph/eco-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    DldGraphComponent,
    ChartSamplesComponent,
    EcoGraphComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ChartsModule
  ],
  providers: [EcoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
