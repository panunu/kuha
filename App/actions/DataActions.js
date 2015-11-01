export const RECEIVE_DATA = 'RECEIVE_DATA';

export function fetchData() {
  return function(dispatch) {
    dispatch({
      type: RECEIVE_DATA,
      payload: [
        {
          name: 'Kuha'
        },
        {
          name: 'Ahven'
        }
      ]
    });
  }
}
