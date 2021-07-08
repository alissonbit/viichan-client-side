import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';

@Component({
  selector: 'app-api-tester',
  templateUrl: './api-tester.component.html',
  styleUrls: ['./api-tester.component.scss']
})
export class ApiTesterComponent implements OnInit {

  crud;

  constructor(crud: CrudService) {
    this.crud = crud;
  }

  ngOnInit(): void {
    this.crud.testConnection();
  }

}