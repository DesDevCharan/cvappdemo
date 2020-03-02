import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/emp.interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  employee: Employee;
  selected$ = new Subject();
  selectedObs = this.selected$.asObservable();
  constructor() { }

  saveSelected(employee: Employee) {
    this.employee = employee;
    this.notify();
  }
  getSelected() {
    return this.employee;
  }
  notify() {
    const emp = this.getSelected();
    this.selected$.next(emp);
  }
}
