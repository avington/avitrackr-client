// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientRoot: 'http://localhost:4200/',
  apiRoot: 'http://localhost:4095/api/',
  auth: { stsAuthority: 'http://localhost:4242/', clientId: 'spa-client' },
  toasterSettings: {
    module: {
      timeOut: 1500,
      positionClass: 'toast-top-right'
    },
    component: {
      easeTime: 500,
      easing: 'ease-out'
    }
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
