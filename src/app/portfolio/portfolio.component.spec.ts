import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesComponentComponent } from './portfolio.component';

describe('ExamplesComponentComponent', () => {
  let component: ExamplesComponentComponent;
  let fixture: ComponentFixture<ExamplesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
