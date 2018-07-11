import { State } from '../reducers'
import { createSelector } from 'reselect'

/*
 * Get the todos state from the root state
 */
const getActiveComponentState = ((state: State) => state.activecomponents)

/*
 * Getting todos array from todos State
 */
export const getActiveComponents = createSelector([getActiveComponentState], s => s.activecomponents)