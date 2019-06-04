# Simple pie chart in 5 minutes

As its name says it is pretty simple pie chart component made with Angular 7 as its only dependency.

## Installation

```bash
npm i dc-simple-pie-chart --save
```

## Usage

First, we need to import our library into our app.module.ts(in this case) or any particular module in which you want to use charts.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DcSimplePieChartModule } from 'dc-simple-pie-chart';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DcSimplePieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then in the component in which we intend to use charts, we need to give it some data to work with. So here is our data model with some dummy data in our app.component.ts file.

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  // Here we have an array of 2 charts
  chartData: any = [
      {
        'title': 'something',
        'chartValues': [
          {
            'name': 'Inventoried',
            'value': 35,
            'color': '#1EB6FF'
          },
          {
            'name': 'Not Inventoried',
            'value': 65,
            'color': '#A2D729'
          }
        ]
      },
      {
        'title': 'something',
        'chartValues': [
          {
            'name': 'Inventoried',
            'value': 35,
            'color': '#1EB7FF'
          },
          {
            'name': 'Not Inventoried',
            'value': 65,
            'color': '#A2D429'
          }
        ]
      }
  ];
}
```

Finally, the last step! All we have to do now is to call our chart component in our component.html file and pass the data to it.

```
<div *ngFor="let chart of chartData; let id = index">
  <!-- So here we have 3 inputs
       identity is a chart id which must be unique that's why I used "chart" as the prefix,
       data is for values,
       and chartName is for chart name 
  -->
  <dc-chart [identity]="'chart' + id" 
            [data]="chart.chartValues" 
            [chartName]="chart.title">
  </dc-chart>
</div>
```

![Alt text](https://scontent.ftgd2-1.fna.fbcdn.net/v/t1.15752-9/62262051_2091188847845856_4574206746528055296_n.png?_nc_cat=100&_nc_ht=scontent.ftgd2-1.fna&oh=ed30039309cf2c6fcd29e7ae66171006&oe=5D5A5E91 "Optional title")

# And there we have it pretty simple but effective pie chart in 5 minutes

