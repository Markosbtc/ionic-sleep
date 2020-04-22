import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { IObservation } from '@ahryman40k/ts-fhir-types/lib/R4';

@Component({
  selector: 'app-sleep-chart',
  templateUrl: './sleep-chart.component.html',
  styleUrls: ['./sleep-chart.component.scss'],
})
export class SleepChartComponent implements OnInit {
  @ViewChild('barCanvas') barCanvas: ElementRef;
  @Input() sleepChartData: IObservation[];

  private barChart: Chart;
  deepSleepTime = [];
  lightSleepTime = [];
  timeAwake = [];
  // chartHeightMax = 0;

  constructor() { }

  ngOnInit() {
    this.extractData();
    this.createChart();
  }

  createChart() {

    if (this.barChart) {
      this.barChart.destroy();
    }
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Deep Sleep',
            backgroundColor: 'rgb(0, 25, 134)',
            borderColor: 'rgb(0, 25, 134)',
            data: this.deepSleepTime
          },
          {
            label: 'Light Sleep',
            backgroundColor: 'rgb(66,140,255)',
            borderColor: 'rgb(66,140,255)',
            data: this.lightSleepTime
          },
          {
            label: 'Time awake',
            backgroundColor: 'rgb(255, 111, 0)',
            borderColor: 'rgb(255, 111, 0)',
            data: this.timeAwake
          }
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              // max: this.chartHeightMax
              callback(value, index, values) {
                if (index === values.length - 1) {
                  return value;
                } else {
                  return '';
                }
              }
            },
            stacked: true,
            gridLines: {
              drawTicks: false,
            },
          }],
          xAxes: [{
            stacked: true,
            type: 'time',
            time: {
              unit: 'day',
              displayFormats: {
                day: 'ddd, MMM DD'
              }
            },
            gridLines: {
              drawTicks: false,
              display: false,
            },
            offset: true,
            ticks: {
              // display: false,
              padding: 10,
            }
          }]
        },
        tooltips: {
          callbacks: {
            label(tooltipItem, data) {
              let label = data.datasets[tooltipItem.datasetIndex].label || '';
              if (label) {
                label += ': ';
              }
              const h = Math.floor(tooltipItem.yLabel / 60);
              const m = tooltipItem.yLabel % 60;
              const minutes = m < 10 ? '0' + m : m;
              if (h > 0) {
                label += h + 'h ' + minutes + 'min';
              } else {
                label += minutes + 'min';
              }
              return label;
            },
            title(tooltipItem, data) {
              const title = tooltipItem[0].xLabel;
              return title.split(',').splice(0, 2).toString();
            }
          }
        }
      }
    });

    this.positionXLabel(this.barChart);
  }

  positionXLabel(chart) {
    const xScale = chart.scales['x-axis-0'];
    const xLabelOffset = (xScale.getPixelForTick(1) - xScale.getPixelForTick(0)) / 2;
    chart.options.scales.xAxes[0].ticks.labelOffset = xLabelOffset;

    chart.update();
  }

  extractData() {
    this.sleepChartData.forEach(e => {
      this.lightSleepTime.push(
        {
          x: new Date(e.effectiveDateTime),
          y: e.component[0].valueQuantity.value
        });
      this.deepSleepTime.push(
        {
          x: new Date(e.effectiveDateTime),
          y: e.component[1].valueQuantity.value
        });
      this.timeAwake.push(
        {
          x: new Date(e.effectiveDateTime),
          y: e.component[2].valueQuantity.value
        });
    });
  }

  // demo data
  exampleFill() {
    this.deepSleepTime.push(
      { x: new Date(), y: 2 },
      { x: new Date(new Date().setDate(new Date().getDate() + 1)), y: 1.5 },
      { x: new Date(new Date().setDate(new Date().getDate() + 2)), y: 0 },
      { x: new Date(new Date().setDate(new Date().getDate() + 3)), y: 2 },
      { x: new Date(new Date().setDate(new Date().getDate() + 4)), y: 0 },
      { x: new Date(new Date().setDate(new Date().getDate() + 5)), y: 2.3 },
      { x: new Date(new Date().setDate(new Date().getDate() + 6)), y: 1 },
    );
    this.lightSleepTime.push(
      { x: new Date(), y: 6 },
      { x: new Date(new Date().setDate(new Date().getDate() + 1)), y: 4 },
      { x: new Date(new Date().setDate(new Date().getDate() + 2)), y: 0 },
      { x: new Date(new Date().setDate(new Date().getDate() + 3)), y: 6 },
      { x: new Date(new Date().setDate(new Date().getDate() + 4)), y: 0 },
      { x: new Date(new Date().setDate(new Date().getDate() + 5)), y: 4 },
      { x: new Date(new Date().setDate(new Date().getDate() + 6)), y: 5 },
    );
    this.timeAwake.push(
      { x: new Date(), y: 1 },
      { x: new Date(new Date().setDate(new Date().getDate() + 1)), y: 3.2 },
      { x: new Date(new Date().setDate(new Date().getDate() + 2)), y: 0 },
      { x: new Date(new Date().setDate(new Date().getDate() + 3)), y: 0.3 },
      { x: new Date(new Date().setDate(new Date().getDate() + 4)), y: 0 },
      { x: new Date(new Date().setDate(new Date().getDate() + 5)), y: 3 },
      { x: new Date(new Date().setDate(new Date().getDate() + 6)), y: 1.6 },
    );
  }

}
