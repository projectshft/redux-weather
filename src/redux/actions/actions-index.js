export const EXAMPLE_ACTION = "EXAMPLE_ACTION"; // <= storing strings as vars to avoid bugs. Don't forget to import in reducer

export function exampleAction() {
  const request = 'an api request, probably'

  return {
    type: EXAMPLE_ACTION,
    payload: request
  }
}