import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpAuthInterceptorService } from './http-auth-intercetor.service';

export const CORE_PROVIDERS: any[] = [
  AuthService,
  { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptorService, multi: true }
];
