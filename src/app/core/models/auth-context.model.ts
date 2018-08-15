import { UserProfile } from './user-profile.model';
import { SimpleClaim } from './simple-claim.model';

export class AuthContext {
  userProfile: UserProfile;
  claims: SimpleClaim[];
}
