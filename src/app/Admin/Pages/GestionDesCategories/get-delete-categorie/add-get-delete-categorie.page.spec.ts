import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGetDeleteCategoriePage } from './add-get-delete-categorie.page';

describe('AddGetDeleteCategoriePage', () => {
  let component: AddGetDeleteCategoriePage;
  let fixture: ComponentFixture<AddGetDeleteCategoriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddGetDeleteCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
