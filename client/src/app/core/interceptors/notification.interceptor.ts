import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreNotificationService } from '@core/services/notification.service';
import { SharedHttpError } from '@shared/interfaces/http-error.interface';
import { SharedRequestHeader } from '@shared/interfaces/request-header.interface';
import { Observable, catchError, finalize } from 'rxjs';

@Injectable()
export class CoreNotificationInterceptor implements HttpInterceptor {
    constructor(private notificationService: CoreNotificationService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const headerSuccessMessageKey = request.headers.get(SharedRequestHeader.SUCCESS_MESSAGE) || '';
        const headerErrorMessageKey = request.headers.get(SharedRequestHeader.ERROR_MESSAGE) || '';
        let isError = false;

        return next.handle(request).pipe(
            catchError((response: HttpErrorResponse) => {
                const { messageKey } = response?.error as SharedHttpError;
                isError = true;

                this._showErrorMessage(messageKey, headerErrorMessageKey);

                throw response;
            }),
            finalize(() => {
                if (!isError && headerSuccessMessageKey) {
                    this.notificationService.showSuccessNotification(headerSuccessMessageKey);
                }
            }),
        );
    }

    private _showErrorMessage(errorMessageKey: string, headerErrorMessageKey: string): void {
        if (errorMessageKey) {
            this.notificationService.showErrorNotification(errorMessageKey);
            return;
        }

        if (headerErrorMessageKey) {
            this.notificationService.showErrorNotification(headerErrorMessageKey);
        }
    }
}
