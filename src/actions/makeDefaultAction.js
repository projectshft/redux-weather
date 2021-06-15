//variables
export const MAKE_DEFAULT = "MAKE_DEFAULT";

//action creators
export const makeDefaultCity = () => {
  return {
    type: MAKE_DEFAULT,
    payload: localStorage.getItem("city"),
  };
};
