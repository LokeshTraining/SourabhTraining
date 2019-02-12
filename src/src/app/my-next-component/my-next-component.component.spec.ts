import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNextComponentComponent } from './my-next-component.component';

describe('MyNextComponentComponent', () => {
  let component: MyNextComponentComponent;
  let fixture: ComponentFixture<MyNextComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNextComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
