import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBlueComponent } from './bottom-blue.component';

describe('BottomBlueComponent', () => {
  let component: BottomBlueComponent;
  let fixture: ComponentFixture<BottomBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
