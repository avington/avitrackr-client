import { UserPermission } from './user-permissions.model';

export class UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  userPermissions: UserPermission[];
}
