import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalleComponent } from './calle.component';

describe('CalleComponent', () => {
  let component: CalleComponent;
  let fixture: ComponentFixture<CalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
