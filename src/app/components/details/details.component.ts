import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';
import { Employee, Address } from 'src/app/interfaces/emp.interfaces';

@Component({
  selector: 'cv-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  employee: Employee;
  address: Address[];
  constructor(private cv: CvService) {
    this.cv.selectedObs.subscribe((employee: Employee) => {
      this.employee = employee;
      this.address = employee.address;
    });
  }

  ngOnInit() {
  }

}
