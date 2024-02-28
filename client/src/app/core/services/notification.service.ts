import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoreNotificationComponent } from '@core/components/notification/notification.component';
import { NotificationType } from '@core/interfaces/notification.interface';

@Injectable({ providedIn: 'root' })
export class CoreNotificationService {
    constructor(private snackBar: MatSnackBar) {}

    showSuccessNotification(messageKey: string): void {
        this.snackBar.openFromComponent(CoreNotificationComponent, {
            data: { icon: 'check_circle_outline', messageKey },
            panelClass: NotificationType.SUCCESS,
        });
    }

    showErrorNotification(messageKey: string): void {
        this.snackBar.openFromComponent(CoreNotificationComponent, {
            data: { icon: 'error_outline', messageKey },
            panelClass: NotificationType.ERROR,
        });
    }

    showInfoNotification(messageKey: string): void {
        this.snackBar.openFromComponent(CoreNotificationComponent, {
            data: { icon: 'info_outline', messageKey },
            panelClass: NotificationType.INFO,
        });
    }
}
