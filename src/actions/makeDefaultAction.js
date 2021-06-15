//variables
export const MAKE_DEFAULT = "MAKE_DEFAULT";

//action creators
export const defaultCity = () => {
  return {
    type: MAKE_DEFAULT,
    payload: localStorage.getItem("city"),
  };
};
