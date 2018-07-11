import { State } from '../reducers'
import { createSelector } from 'reselect'

/*
 * Get the todos state from the root state
 */
const getLenderIdState = ((state: State) => state.lenderIds)

/*
 * Getting todos array from todos State
 */
export const getLenderIdAction = createSelector([getLenderIdState], s => s.lenderIds)