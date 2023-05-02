import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerdialogComponent } from './answerdialog.component';

describe('AnswerdialogComponent', () => {
  let component: AnswerdialogComponent;
  let fixture: ComponentFixture<AnswerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
