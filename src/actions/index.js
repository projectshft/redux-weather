export const CREATE_CHART = "CREATE_CHART";

export function createChart(city) {

  return {
    type:CREATE_CHART,
    payload:city
  }

}