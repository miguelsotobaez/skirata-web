import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JaplusComponent } from './japlus.component';

describe('japlusComponent', () => {
  let component: JaplusComponent;
  let fixture: ComponentFixture<JaplusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JaplusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
