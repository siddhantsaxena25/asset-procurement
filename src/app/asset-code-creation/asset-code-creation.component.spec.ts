import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetCodeCreationComponent } from './asset-code-creation.component';

describe('AssetCodeCreationComponent', () => {
  let component: AssetCodeCreationComponent;
  let fixture: ComponentFixture<AssetCodeCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetCodeCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetCodeCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
