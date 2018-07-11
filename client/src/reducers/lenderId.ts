import { ActionTypes, Action } from '../actions/todos'
import lenderId from '../models/lenderId'

// Define our State interface for the current reducer
export interface State {
  lenderIds: lenderId
}

// Define our initialState
var t = new lenderId;
t.id = 0;
t.lenderId = 'none';

export const initialState: State = {
  lenderIds: t  // We don't have any todos at the start of the app
}

/* 
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */
export function reducer4(state: State = initialState, action: Action) {
  switch (action.type) {

    case ActionTypes.LENDER_ID: {
      /*
       * This is the same as 
       * const todoId = action.payload.todoId
       */

   const actionc = action.payload.lenderId;
 
   return {
    
        lenderIds: actionc // Add todo to todos array
      }
    }

    default:
      return state
  }
}