import { State } from '../reducers'
import { createSelector } from 'reselect'

/*
 * Get the todos state from the root state
 */
const getNewActionState = ((state: State) => state.newactions)

/*
 * Getting todos array from todos State
 */
export const getNewAction = createSelector([getNewActionState], s => s.newactions)