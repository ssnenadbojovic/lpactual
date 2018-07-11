
import { ActionTypes, Action } from '../actions/todos'
import activecomponent from '../models/ActiveComponent'

// Define our State interface for the current reducer
export interface State {
  activecomponents: activecomponent[]
}

// Define our initialState

export const initialState: State = {
  activecomponents: [] // We don't have any todos at the start of the app
}

/* 
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */
export function reducer2(state: State = initialState, action: Action) {
  switch (action.type) {

    case ActionTypes.ACTIVE_COMPONENT: {
      /*
       * This is the same as 
       * const todoId = action.payload.todoId
       */
   
      const activec = action.payload.currentcomponent

      return {
        ...state,
        activecomponents: [...state.activecomponents, activec] // Add todo to todos array
      }
    }

    default:
      return state
  }
}