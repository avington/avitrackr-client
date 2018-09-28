export interface MyTask {
  identifier: string;
  taskName: string;
  taskDescription?: string;
  createdAt?: Date;
  startsAt?: Date;
  startsAtTime?: any;
  expiresAt?: Date;
  expiresAtTime?: any;
  notificationLocations?: NotificationLocation[];
  notifications?: Notification[];
  status?: MyTaskStatus;
  showBusy?: boolean;
  isVisible?: boolean;
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
  id?: number;
  statusName?: string;
}
