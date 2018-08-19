import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTaskListContainerComponent } from './summary-task-list-container.component';

describe('SummaryTaskListContainerComponent', () => {
  let component: SummaryTaskListContainerComponent;
  let fixture: ComponentFixture<SummaryTaskListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTaskListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTaskListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
