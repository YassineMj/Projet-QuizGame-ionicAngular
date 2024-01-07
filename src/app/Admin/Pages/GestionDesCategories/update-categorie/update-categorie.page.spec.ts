import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateCategoriePage } from './update-categorie.page';

describe('UpdateCategoriePage', () => {
  let component: UpdateCategoriePage;
  let fixture: ComponentFixture<UpdateCategoriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
