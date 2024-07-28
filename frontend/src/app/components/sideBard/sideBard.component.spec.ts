/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SideBardComponent } from './sideBard.component';

describe('SideBardComponent', () => {
  let component: SideBardComponent;
  let fixture: ComponentFixture<SideBardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
