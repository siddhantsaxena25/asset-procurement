import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGenerationModalComponent } from './code-generation-modal.component';

describe('CodeGenerationModalComponent', () => {
  let component: CodeGenerationModalComponent;
  let fixture: ComponentFixture<CodeGenerationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeGenerationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeGenerationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
