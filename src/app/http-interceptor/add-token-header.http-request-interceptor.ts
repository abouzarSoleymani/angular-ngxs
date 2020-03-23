import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
    Observable,
    of
} from 'rxjs';
import {
    first,
    mergeMap
} from 'rxjs/operators';
import {Store} from '@ngxs/store';
import {AuthStatusState} from '../auth/store';
import {ApiEndpointService} from '../core/services/api-endpoint.service';

@Injectable()
export class AddTokenHeaderHttpRequestInterceptor implements HttpInterceptor {
    /**
     * Constructor.
     */
    constructor(private store: Store) {
    }

    /**
     * Intercepts all HTTP requests and adds the JWT token to the request's header if the URL
     * is a REST endpoint and not login or logout.
     */
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isApiEndpoint: boolean = ApiEndpointService.isApiEndpoint(request.url);
        const isAuthEndpoint: boolean = ApiEndpointService.isAuthEndpoint(request.url);

        // NOTE: Only add the auth token to non-Auth REST endpoints.
        if (isApiEndpoint && !isAuthEndpoint) {
            return this.addToken(request).pipe(
                first(),
                mergeMap((requestWithToken: HttpRequest<any>) => next.handle(requestWithToken))
            );
        } else {
            return next.handle(request);
        }
    }

    /**
     * Adds the JWT token to the request's header.
     */
    private addToken(request: HttpRequest<any>): Observable<HttpRequest<any>> {
        // NOTE: DO NOT try to immediately setup this selector in the constructor or as an assignment in a
        // class member variable as there's no stores available when this interceptor first fires up and
        // as a result it'll throw a runtime error.
        return this.store.
            select(AuthStatusState.token).pipe(
            first(),
            mergeMap((token: string) => {
                if (token) {
                    request = request.clone({
                        headers: request.headers.set('Authorization', `Bearer ${token}`),
                        withCredentials: true
                    });
                } else {
                    console.warn(`addToken( Invalid token!!! Cannot use token '${token}' for endpoint: ${request.url} ).`);
                }
                return of(request);
            })
        );
    }
}
