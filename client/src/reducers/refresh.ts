import { ActionTypes, Action } from '../actions/todos'
import refresh from '../models/Refresh'

// Define our State interface for the current reducer
export interface State {
  refreshScreen: refresh
}

// Define our initialState
var t = new refresh;
t.id = 0;
t.refresh = false;

export const initialState: State = {
  refreshScreen: t  // We don't have any todos at the start of the app
}

/* 
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */
export function reducer4(state: State = initialState, action: Action) {
  switch (action.type) {

    case ActionTypes.REFRESH: {
      /*
       * This is the same as 
       * const todoId = action.payload.todoId
       */

   const actionc = action.payload.refreshScreen;
 
   return {
    
        refreshScreen: actionc // Add todo to todos array
      }
    }

    default:
      return state
  }
}