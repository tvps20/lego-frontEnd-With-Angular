import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PecaProfileComponent } from './peca-profile.component';

describe('UserProfileComponent', () => {
  let component: PecaProfileComponent;
  let fixture: ComponentFixture<PecaProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PecaProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
