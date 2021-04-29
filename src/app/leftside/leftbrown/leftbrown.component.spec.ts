import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbrownComponent } from './leftbrown.component';

describe('LeftbrownComponent', () => {
  let component: LeftbrownComponent;
  let fixture: ComponentFixture<LeftbrownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftbrownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftbrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
