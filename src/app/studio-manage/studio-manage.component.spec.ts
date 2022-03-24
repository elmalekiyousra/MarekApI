import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioManageComponent } from './studio-manage.component';

describe('StudioManageComponent', () => {
  let component: StudioManageComponent;
  let fixture: ComponentFixture<StudioManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
