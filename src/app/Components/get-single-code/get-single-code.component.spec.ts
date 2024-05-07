import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleCodeComponent } from './get-single-code.component';

describe('GetSingleCodeComponent', () => {
  let component: GetSingleCodeComponent;
  let fixture: ComponentFixture<GetSingleCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSingleCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetSingleCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
