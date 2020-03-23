import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { User } from '../../models/user';
import {NavigateToRegister, NavigateToLogin, LoginRedirect, LoginSuccess, Logout} from './auth.actions';
import {appRoutePaths} from '../../../app.routes';

export interface AuthStatusStateModel {
  loggedIn: boolean;
  user: User | null;
  token: string;
}

const authStatusStateDefaults: AuthStatusStateModel = {
  loggedIn: false,
  user: null,
  token: null,
};

@State<AuthStatusStateModel>({
  name: 'status',
  defaults: authStatusStateDefaults,
})
export class AuthStatusState {
  @Selector()
  static getLoggedIn(state: AuthStatusStateModel) {
    return state.loggedIn;
  }
  @Selector()
  static token(state: AuthStatusStateModel): string | null {
    return state.token;
  }

  @Selector()
  static getUser(state: AuthStatusStateModel) {
    return state.user;
  }

  @Action(LoginSuccess)
  loginSuccess(
    { patchState }: StateContext<AuthStatusStateModel>,
    action: LoginSuccess
  ) {
    patchState({
      loggedIn: true,
      user: action.payload.user,
    });
  }

  @Action([Logout])
  logout({ dispatch, setState }: StateContext<AuthStatusStateModel>) {
    setState(authStatusStateDefaults);
    dispatch(new Navigate([appRoutePaths.login]));
  }

  @Action([LoginRedirect])
  loginRedirect({ dispatch, setState }: StateContext<AuthStatusStateModel>) {
    setState(authStatusStateDefaults);
    dispatch(new Navigate([appRoutePaths.login]));
  }


  @Action(NavigateToRegister)
  navigateToRegister({dispatch}) {
     dispatch(new Navigate([appRoutePaths.register]));
  }

  @Action(NavigateToLogin)
  navigateToLogin({dispatch}) {
    dispatch(new Navigate([appRoutePaths.login]));
  }
}
