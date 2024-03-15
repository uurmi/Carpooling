// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://7fs68tfee0.execute-api.us-east-1.amazonaws.com/Prod/Post?start_city=sousse&end_city=tunis&offset=0&limit=10&ta=2019-10-14&td=2019-10-13',
  filteredApi: 'https://7fs68tfee0.execute-api.us-east-1.amazonaws.com/Prod/Post',
  singlePostApi: 'https://qsnuargyf8.execute-api.us-east-1.amazonaws.com/Prod/Post',
  updateApi: 'https://qsnuargyf8.execute-api.us-east-1.amazonaws.com/Prod/Post'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
