import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetProcurementComponent } from './asset-procurement.component';

describe('AssetProcurementComponent', () => {
  let component: AssetProcurementComponent;
  let fixture: ComponentFixture<AssetProcurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetProcurementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
