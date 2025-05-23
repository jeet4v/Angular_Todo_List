import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryBookComponent } from './library-book.component';

describe('LibraryBookComponent', () => {
  let component: LibraryBookComponent;
  let fixture: ComponentFixture<LibraryBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
