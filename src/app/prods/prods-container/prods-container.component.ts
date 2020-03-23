import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prods-container',
  templateUrl: './prods-container.component.html',
  styleUrls: ['./prods-container.component.scss']
})
export class ProdsContainerComponent implements OnInit {
  pageTitle = 'Acme Product Management';

  constructor() { }

  ngOnInit() {
  }

}
