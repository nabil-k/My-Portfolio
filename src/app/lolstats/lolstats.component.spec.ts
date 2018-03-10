import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolstatsComponent } from './lolstats.component';

describe('LolstatsComponent', () => {
  let component: LolstatsComponent;
  let fixture: ComponentFixture<LolstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
