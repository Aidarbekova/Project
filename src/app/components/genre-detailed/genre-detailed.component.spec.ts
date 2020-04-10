import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreDetailedComponent } from './genre-detailed.component';

describe('GenreDetailedComponent', () => {
  let component: GenreDetailedComponent;
  let fixture: ComponentFixture<GenreDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
