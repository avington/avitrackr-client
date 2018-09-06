import { AuthGuard } from './auth-guards';

export const CORE_GUARDS: any[] = [AuthGuard];
export * from './auth-guards';