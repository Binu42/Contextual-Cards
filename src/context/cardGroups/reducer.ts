import { IState } from './context';
import { SET_CARDS, FETCH_CARDS_FAILURE, SET_LOADING } from './types';

interface IAction {
  type: string;
  payload?: any;
}

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        pending: true,
      };
    case SET_CARDS:
      return {
        cardGroups: action.payload,
        pending: false,
        failure: false,
      };
    case FETCH_CARDS_FAILURE:
      return {
        ...state,
        pending: false,
        failure: true,
      };
    default:
      return state;
  }
};

export default reducer;
