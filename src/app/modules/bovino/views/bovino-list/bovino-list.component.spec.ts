import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovinoListComponent } from './bovino-list.component';

describe('BovinoListComponent', () => {
  let component: BovinoListComponent;
  let fixture: ComponentFixture<BovinoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BovinoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BovinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
