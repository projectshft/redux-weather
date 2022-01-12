export const searchTermClick = (searchTerm) => {
  return {
    type: 'SEARCHTERM_CLICK', 
    payload: searchTerm
  }
}