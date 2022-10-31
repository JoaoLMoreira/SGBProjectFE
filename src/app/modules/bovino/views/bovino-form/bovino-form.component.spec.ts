import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovinoFormComponent } from './bovino-form.component';

describe('BovinoFormComponent', () => {
  let component: BovinoFormComponent;
  let fixture: ComponentFixture<BovinoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BovinoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BovinoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
