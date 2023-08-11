import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauTodoComponent } from './tableau-todo.component';

describe('TableauTodoComponent', () => {
  let component: TableauTodoComponent;
  let fixture: ComponentFixture<TableauTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableauTodoComponent]
    });
    fixture = TestBed.createComponent(TableauTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
