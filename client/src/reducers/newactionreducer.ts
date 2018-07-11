import { ActionTypes, Action } from '../actions/todos'
import newaction from '../models/NewActions'

// Define our State interface for the current reducer
export interface State {
  newactions: newaction
}

// Define our initialState
var t = new newaction;
t.actiontype = 'none';
t.id = 0;
t.component = 'none';

export const initialState: State = {
  newactions: t  // We don't have any todos at the start of the app
}

/* 
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */
export function reducer3(state: State = initialState, action: Action) {
  switch (action.type) {

    case ActionTypes.NEW_ACTION: {
      /*
       * This is the same as 
       * const todoId = action.payload.todoId
       */

   const actionc = action.payload.newaction;

   return {
    
        newactions: actionc // Add todo to todos array
      }
    }

    default:
      return state
  }
}