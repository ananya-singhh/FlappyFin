import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanInfoComponent } from './ocean-info.component';

describe('OceanInfoComponent', () => {
  let component: OceanInfoComponent;
  let fixture: ComponentFixture<OceanInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceanInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
