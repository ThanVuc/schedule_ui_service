export type NotificationType = "success" | "error";
export type Number = 3000; 
export interface NotificationModel {
    message: string;
    type: NotificationType;
    isVisible: boolean;
    duration: Number;
}
