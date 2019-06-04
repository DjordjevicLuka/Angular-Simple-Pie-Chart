import { NgModule } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { DcSimplePieChartComponent } from './dc-simple-pie-chart.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ChartComponent, DcSimplePieChartComponent],
  imports: [
    CommonModule
  ],
  exports: [ChartComponent, DcSimplePieChartComponent]
})
export class DcSimplePieChartModule { }
