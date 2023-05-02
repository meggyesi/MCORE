import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComdialogComponent } from './comdialog.component';

describe('ComdialogComponent', () => {
  let component: ComdialogComponent;
  let fixture: ComponentFixture<ComdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
