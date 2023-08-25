import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDeliveryConfirmationComponent } from './asset-delivery-confirmation.component';

describe('AssetDeliveryConfirmationComponent', () => {
  let component: AssetDeliveryConfirmationComponent;
  let fixture: ComponentFixture<AssetDeliveryConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetDeliveryConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetDeliveryConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
