import axios from "axios";
import React, { useCallback, useEffect, useReducer } from "react";
import CardGroupsReducer from "./reducer";
import {initialState, CardGroupsContext} from './context'

import { FETCH_CARDS, FETCH_CARDS_FAILURE, SET_LOADING } from "./types";
import { CardGroupType } from "types/cardGroups";

const CardGroupsState = (props: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(CardGroupsReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const removeCard = (names: string[], cardGroups: CardGroupType[]):CardGroupType[] => {
    let newCardGroups = []
    for(let group of cardGroups){
      if(group.design_type !== "HC3"){
        newCardGroups.push(group);
        continue;
      }
      const {cards}=group;
      let newCards = [];
      for(let card of cards){
        const index = names.findIndex(name => name === card.name)
        console.log(index)
        if(index === -1)
        newCards.push(card);
      }
      newCardGroups.push({...group, cards: newCards})
    }
    return newCardGroups;
  }

  const fetchCardGroups = useCallback(async ()=> {
    setLoading();
    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/ce6bba3e-297c-4eed-897a-d3ca70afc604"
      );

      // remove all HC3 cards which is in localstorage.
      const remindNeverCards = JSON.parse( localStorage.getItem("remindNever") || "[]");
      let cardGroups:CardGroupType[] = response.data.card_groups;
      if(remindNeverCards.length){
        cardGroups = removeCard(remindNeverCards, response.data.card_groups);
      }

      dispatch({
        type: FETCH_CARDS,
        payload: cardGroups,
      });
    } catch (error) {
      dispatch({
        type: FETCH_CARDS_FAILURE,
        payload: error,
      });
    }
  }, [])

  const remindLater = (name:  string):void=> {
    const cardGroups = removeCard([name], state.cardGroups);
    console.log(cardGroups)
    dispatch({
      type: FETCH_CARDS,
      payload: cardGroups,
    });
  }

  const remindNever = (name: string):void=> {
    const remindNeverCards = JSON.parse( localStorage.getItem("remindNever") || "[]");
    localStorage.setItem("remindNever", JSON.stringify([...remindNeverCards, name]));
    const cardGroups = removeCard([name], state.cardGroups);
    dispatch({
      type: FETCH_CARDS,
      payload: cardGroups,
    });
  }

  useEffect(() => {
    fetchCardGroups();
  }, [fetchCardGroups]);

  return (
    <CardGroupsContext.Provider value={{ ...state, setLoading, fetchCardGroups, remindLater, remindNever }}>
      {props.children}
    </CardGroupsContext.Provider>
  );
};
export default CardGroupsState;
