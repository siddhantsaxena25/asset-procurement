import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDeliveryComponent } from './asset-delivery.component';

describe('AssetDeliveryComponent', () => {
  let component: AssetDeliveryComponent;
  let fixture: ComponentFixture<AssetDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
