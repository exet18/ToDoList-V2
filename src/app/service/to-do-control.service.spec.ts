import { TestBed } from '@angular/core/testing';

import { ToDoControlService } from './to-do-control.service';

describe('ToDoControlService', () => {
  let service: ToDoControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
