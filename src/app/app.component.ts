import { Component, } from '@angular/core';

@Component({
  selector: 'dc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dc-simple-chart';

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
