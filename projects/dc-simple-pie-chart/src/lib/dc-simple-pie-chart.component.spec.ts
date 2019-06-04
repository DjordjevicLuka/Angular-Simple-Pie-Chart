import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcSimplePieChartComponent } from './dc-simple-pie-chart.component';

describe('DcSimplePieChartComponent', () => {
  let component: DcSimplePieChartComponent;
  let fixture: ComponentFixture<DcSimplePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcSimplePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcSimplePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
