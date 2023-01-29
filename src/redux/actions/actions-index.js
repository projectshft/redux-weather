// storing strings as vars to avoid bugs. Don't forget to import consts in specific reducer
export const CITY_SEARCH = "CITY_SEARCH";

export function searchCity() {
  const request = 'an api request, probably'
  debugger
  return {
    type: CITY_SEARCH,
    payload: request
  }
}