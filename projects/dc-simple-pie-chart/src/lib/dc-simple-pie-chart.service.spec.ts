import { TestBed } from '@angular/core/testing';

import { DcSimplePieChartService } from './dc-simple-pie-chart.service';

describe('DcSimplePieChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DcSimplePieChartService = TestBed.get(DcSimplePieChartService);
    expect(service).toBeTruthy();
  });
});
