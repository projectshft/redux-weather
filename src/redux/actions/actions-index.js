export const EXAMPLE_ACTION = "EXAMPLE_ACTION"; // <= storing strings as vars to avoid bugs. Don't forget to import consts in reducer

export const INCREMENT_ACTION = "INCREMENT_ACTION" // <= import to reducer (not index, the actual test-reducer, or more specific reducer later on)

export function exampleAction() {
  const request = 'an api request, probably'
  return {
    type: EXAMPLE_ACTION,
    payload: request
  }
}

export function increment() {
  return {
    type: INCREMENT_ACTION,
  };
};