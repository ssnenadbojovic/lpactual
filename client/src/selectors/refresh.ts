import { State } from '../reducers'
import { createSelector } from 'reselect'

/*
 * Get the todos state from the root state
 */
const getRefreshState = ((state: State) => state.refreshScreen)

/*
 * Getting todos array from todos State
 */
export const getRefreshAction = createSelector([getRefreshState], s => s.refreshScreen)