import { Component, Input, AfterViewInit } from '@angular/core';
import { Chart, ChartValue } from './chart.model';

@Component({
  selector: 'dc-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements AfterViewInit {

  @Input() data: ChartValue[];
  @Input() chartName = 'Chart Title';
  @Input() identity: string; // id of the chart


  categories = []; // chart data
  colors = []; // chart data
  values = []; // chart data

  constructor() { }

  ngAfterViewInit() {
    // we wait for data then draw chart according to it
    this.formatData();
  }

  drawChart(data, colors) {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const parrent = document.getElementById(this.identity) as HTMLDivElement;
    parrent.appendChild(canvas); // place chart where it should be
    const ctx = canvas.getContext('2d');

    let lastend = -1.57; // drawing start point(in radians)
    let myTotal = 0;

    for (let e = 0; e < data.length; e++) {
      myTotal += data[e]; // get total value
    }

    for (let i = 0; i < data.length; i++) {
      // start coloring
      ctx.fillStyle = colors[i];
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      // Arc Parameters: x, y, radius, startingAngle (radians), endingAngle (radians), antiClockwise (boolean)
      ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data[i] / myTotal)) , false);
      ctx.lineTo(canvas.width / 2, canvas.height / 2);
      // end coloring

      // add padding bitween colored parts
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.fill();
      lastend += Math.PI * 2 * (data[i] / myTotal); // calculate starting point for next data part

      ctx.lineTo(canvas.width / 2, canvas.height / 2);
      ctx.stroke();

    }
  }

  formatData() {
    this.data.forEach(element => {
      this.categories.push(element.name);
      this.colors.push(element.color);
      this.values.push(element.value);
    });
    return this.drawChart(this.values, this.colors);
  }

}
