import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalamariComponent } from './calamari.component';

describe('CalamariComponent', () => {
  let component: CalamariComponent;
  let fixture: ComponentFixture<CalamariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalamariComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalamariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
