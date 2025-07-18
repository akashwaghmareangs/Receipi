import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiesListComponent } from './recepies-list.component';

describe('RecepiesListComponent', () => {
  let component: RecepiesListComponent;
  let fixture: ComponentFixture<RecepiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecepiesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
