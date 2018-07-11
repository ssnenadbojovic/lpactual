import { combineReducers } from 'redux'

import * as Activecomponents from './activecomponents'
import * as Newactions from './newactionreducer'
import * as LenderIds from './lenderId'
import * as refreshScreen from './refresh'


export interface State {

  activecomponents: Activecomponents.State,
  newactions: Newactions.State,
  lenderIds: LenderIds.State,
  refreshScreen: refreshScreen.State,

}

export const initialState: State = {

  activecomponents: Activecomponents.initialState,
  newactions: Newactions.initialState,
  lenderIds: LenderIds.initialState,
  refreshScreen: refreshScreen.initialState,

}


export const reducer = combineReducers<State>({

  activecomponents: Activecomponents.reducer2,
  newactions: Newactions.reducer3,
  lenderIds: LenderIds.reducer4,
  refreshScreen: refreshScreen.reducer4,
})