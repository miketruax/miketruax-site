import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponentComponent } from './resume.component';

describe('ResumeComponentComponent', () => {
  let component: ResumeComponentComponent;
  let fixture: ComponentFixture<ResumeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
