export interface MyTask {
  identifier: string;
  taskName: string;
  taskDescription?: string;
  createdAt?: Date;
  expiresAt?: Date;
  notificationLocations?: NotificationLocation[];
  notifications?: Notification[];
  status?: MyTaskStatus;
}

export interface NotificationLocation {
  identifier: string;
  location: string;
  listingBoundsNorthEastLatitude: number;
  listingBoundsNorthEastLongitude: number;
  listingBoundsSouthWestLatitude: number;
  listingBoundsSouthWesttLongitude: number;
}

export interface Notification {
  identifier: string;
  notificationType: NotificationType;
  notificationTiming: NotificationTiming;
}

export interface NotificationType {
  id: number;
  notificationTypeName: string;
}

export interface NotificationTiming {
  timingAmount: number;
  timingAmountType: string;
}

export interface MyTaskStatus {
  id: number;
  statusName?: string;
}
