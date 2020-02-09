import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldElementComponent } from './hello-world-element.component';

describe('HelloWorldElementComponent', () => {
  let component: HelloWorldElementComponent;
  let fixture: ComponentFixture<HelloWorldElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
