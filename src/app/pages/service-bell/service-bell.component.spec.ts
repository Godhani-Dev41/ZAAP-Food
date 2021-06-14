import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBellComponent } from './service-bell.component';

describe('ServiceBellComponent', () => {
  let component: ServiceBellComponent;
  let fixture: ComponentFixture<ServiceBellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceBellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
