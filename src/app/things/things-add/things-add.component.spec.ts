import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsAddComponent } from './things-add.component';

describe('ThingsAddComponent', () => {
  let component: ThingsAddComponent;
  let fixture: ComponentFixture<ThingsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
