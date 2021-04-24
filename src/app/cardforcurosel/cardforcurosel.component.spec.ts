import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardforcuroselComponent } from './cardforcurosel.component';

describe('CardforcuroselComponent', () => {
  let component: CardforcuroselComponent;
  let fixture: ComponentFixture<CardforcuroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardforcuroselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardforcuroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
