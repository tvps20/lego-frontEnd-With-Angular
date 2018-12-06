import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloProfileComponent } from './modelo-profile.component';

describe('ModeloComponent', () => {
  let component: ModeloProfileComponent;
  let fixture: ComponentFixture<ModeloProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
