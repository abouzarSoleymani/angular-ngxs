import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, Select } from '@ngxs/store';

import { Authenticate } from '../models/user';
import { Login, LoginPageState } from '../store';

@Component({
  selector: 'bc-register-page',
  template: `
    <bc-register-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async"
    >
    </bc-register-form>
  `,
  styles: [],
})
export class RegisterPageComponent implements OnInit {
  @Select(LoginPageState.getPending) pending$: Observable<boolean>;
  @Select(LoginPageState.getError) error$: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit() {}

  onSubmit($event: Authenticate) {
    //this.store.dispatch(new Login($event));
  }
}
