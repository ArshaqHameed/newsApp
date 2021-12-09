import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechheadingsComponent } from './techheadings.component';

describe('TechheadingsComponent', () => {
  let component: TechheadingsComponent;
  let fixture: ComponentFixture<TechheadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechheadingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechheadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
