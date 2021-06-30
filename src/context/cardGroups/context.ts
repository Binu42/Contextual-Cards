import { createContext } from 'react';
import { CardGroupType } from 'types/cardGroups';

export interface IState {
  cardGroups: CardGroupType[];
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
  remindLater?: (id: string) => void;
  remindNever?: (id: string) => void;
}

export const CardGroupsContext = createContext<IContext>({ ...initialState });
