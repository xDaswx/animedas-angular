import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryHeaderComponent } from './gallery-header.component';

describe('GalleryHeaderComponent', () => {
  let component: GalleryHeaderComponent;
  let fixture: ComponentFixture<GalleryHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryHeaderComponent]
    });
    fixture = TestBed.createComponent(GalleryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
