import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasListComponent } from './tareas-list.component';

describe('TareasListComponent', () => {
  let component: TareasListComponent;
  let fixture: ComponentFixture<TareasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
