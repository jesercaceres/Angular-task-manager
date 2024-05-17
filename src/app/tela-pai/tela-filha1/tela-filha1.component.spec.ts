import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFilha1Component } from './tela-filha1.component';

describe('TelaFilha1Component', () => {
  let component: TelaFilha1Component;
  let fixture: ComponentFixture<TelaFilha1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaFilha1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaFilha1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
