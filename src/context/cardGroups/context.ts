import { createContext } from "react";

export interface IState {
  cardGroups: any[];
  pending: boolean;
  failure: boolean;
}

export const initialState: IState = {
  cardGroups: [],
  pending: false,
  failure: false,
};

interface IContext extends IState {
  setLoading?: () => void;
  fetchCardGroups?: () => Promise<void>;
}

export const CardGroupsContext = createContext<IContext>({ ...initialState });
