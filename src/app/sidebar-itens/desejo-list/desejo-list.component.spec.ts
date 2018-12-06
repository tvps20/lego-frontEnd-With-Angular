import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesejoListComponent } from './desejo-list.component';

describe('DesejoListComponent', () => {
  let component: DesejoListComponent;
  let fixture: ComponentFixture<DesejoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesejoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesejoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
