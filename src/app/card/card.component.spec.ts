import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuroselCard } from './card.component';

describe('CuroselCard', () => {
  let component: CuroselCard;
  let fixture: ComponentFixture<CuroselCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuroselCard ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuroselCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
