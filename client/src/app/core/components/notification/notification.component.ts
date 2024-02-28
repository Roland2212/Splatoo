import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { NotificationData } from '@core/interfaces/notification.interface';

@Component({
    selector: 'app-core-notification',
    templateUrl: './notification.component.html',
    styleUrl: './notification.component.scss',
})
export class CoreNotificationComponent implements OnInit {
    icon: string = 'description';
    messageKey: string = '';

    constructor(
        @Inject(MAT_SNACK_BAR_DATA) private snackBarData: NotificationData,
        private snackBarRef: MatSnackBarRef<CoreNotificationComponent>,
    ) {}

    ngOnInit(): void {
        this.icon = this.snackBarData?.icon;
        this.messageKey = this.snackBarData?.messageKey;
    }

    onDismiss(): void {
        this.snackBarRef.dismissWithAction();
    }
}
