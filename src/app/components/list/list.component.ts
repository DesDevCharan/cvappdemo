import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Employee, Data } from 'src/app/interfaces/emp.interfaces';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'cv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employees: Employee[];
  selected: Employee;
  constructor(private httpService: HttpService, private cv: CvService) {
    this.httpService.getEmployees().subscribe((data: Data) => {
      this.employees = data.employees;
      this.selected = this.employees[0];
      this.cv.saveSelected(this.employees[0]);
    });
  }

  ngOnInit() {
  }

  onClickEmployee(employee: Employee) {
    this.selected = employee;
    this.cv.saveSelected(employee);
  }

}


