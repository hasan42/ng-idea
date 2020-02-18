import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsItemComponent } from './things-item.component';

describe('ThingsItemComponent', () => {
  let component: ThingsItemComponent;
  let fixture: ComponentFixture<ThingsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
