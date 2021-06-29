import axios from "axios";
import React, { useCallback, useEffect, useReducer } from "react";
import CardGroupsReducer from "./reducer";
import {initialState, CardGroupsContext} from './context'

import { FETCH_CARDS, FETCH_CARDS_FAILURE, SET_LOADING } from "./types";

const CardGroupsState = (props: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(CardGroupsReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const fetchCardGroups = useCallback(async ()=> {
    setLoading();
    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad"
      );
      dispatch({
        type: FETCH_CARDS,
        payload: response.data.card_groups,
      });
    } catch (error) {
      dispatch({
        type: FETCH_CARDS_FAILURE,
        payload: error,
      });
    }
  }, [])

  useEffect(() => {
    fetchCardGroups();
  }, [fetchCardGroups]);

  return (
    <CardGroupsContext.Provider value={{ ...state, setLoading, fetchCardGroups }}>
      {props.children}
    </CardGroupsContext.Provider>
  );
};
export default CardGroupsState;
