export interface NotificationData {
    icon: string;
    messageKey: string;
}

export enum NotificationType {
    DEFAULT = 'default',
    SUCCESS = 'success',
    ERROR = 'error',
    INFO = 'info',
}
