import { Map } from 'immutable';
import { RECEIVE_DATA } from '../actions/DataActions';

const defaultState = Map({
  fish: []
});

const data = function(state = defaultState, action = '') {
  switch (action.type) {
    case RECEIVE_DATA:
      return state.update('fish', data => action.payload);

    default: return state;
  }
};

export { data };
