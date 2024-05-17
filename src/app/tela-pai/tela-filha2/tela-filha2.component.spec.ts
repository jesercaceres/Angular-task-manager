import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFilha2Component } from './tela-filha2.component';

describe('TelaFilha2Component', () => {
  let component: TelaFilha2Component;
  let fixture: ComponentFixture<TelaFilha2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaFilha2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaFilha2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
