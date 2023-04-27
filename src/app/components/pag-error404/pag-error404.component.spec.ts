import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagError404Component } from './pag-error404.component';

describe('PagError404Component', () => {
  let component: PagError404Component;
  let fixture: ComponentFixture<PagError404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagError404Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagError404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
