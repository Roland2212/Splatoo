import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedRequestHeader } from '@shared/interfaces/request-header.interface';
import { Observable, catchError, finalize } from 'rxjs';

// TODO: Remove console.log

@Injectable()
export class CoreNotificationInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const successMessageKey = request.headers.get(SharedRequestHeader.SUCCESS_MESSAGE) || '';
        const errorMessageKey = request.headers.get(SharedRequestHeader.ERROR_MESSAGE) || '';
        let isError = false;

        return next.handle(request).pipe(
            catchError(error => {
                isError = true;

                if (errorMessageKey) {
                    console.log(errorMessageKey);
                }
                throw error;
            }),
            finalize(() => {
                if (!isError && successMessageKey) {
                    console.log(successMessageKey);
                }
            }),
        );
    }
}
