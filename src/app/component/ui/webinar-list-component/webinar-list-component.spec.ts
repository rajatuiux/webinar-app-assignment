import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarListComponent } from './webinar-list-component';

describe('WebinarListComponent', () => {
  let component: WebinarListComponent;
  let fixture: ComponentFixture<WebinarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
