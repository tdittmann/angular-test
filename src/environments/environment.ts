// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    backendUrl: 'https://sc-dahenfeld.de/components/com_tdwapp/v9/',
    locale: 'de',
    hideInformationArticles: ['733', '755', '830', '1195'],
    placeholderPlayer: 'assets/img/platzhalter_kader.png',
    timeFormat: 'HH:mm',
    shortDateFormat: 'DD. MMMM',
    longDateFormat: 'DD. MMMM YYYY'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
