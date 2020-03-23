import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {first, map, take} from 'rxjs/operators';
import {AuthStatusState, LoginRedirect} from '../auth/store';
import {Store} from '@ngxs/store';

@Injectable()
export class AuthRouteGuard implements CanActivate {
    constructor(private store: Store) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.checkStoreAuthentication().pipe(
            map((authed) => {
                if (!authed) {
                    this.store.dispatch(new LoginRedirect());
                    console.log(`canActivate( No. Redirect the user back to login. )`);
                    return false;
                }

                console.log(`canActivate( Yes. Navigate the user to the requested route. )`);
                return true;
            }),
           first()
        );
    }

    /**
     * Determine if the user is logged by checking the Redux store.
     */
    private checkStoreAuthentication(): Observable<boolean> {
        return this.store.select(AuthStatusState.getLoggedIn).pipe(first());
    }
}
