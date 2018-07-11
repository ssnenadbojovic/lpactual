
import newaction from '../models/NewActions'
import lenderId from '../models/lenderId'
import activecomponent from '../models/ActiveComponent'
import refresh from '../models/Refresh'

/*
 * In order to automatically generate id for our todos
 */  

let nextId = 0
let nextId3 = 0
let nextId4 = 0
let nextRefresh= 0;

/*
 * We're defining every action name constant here
 * We're using Typescript's enum
 * Typescript understands enum better 
 */
export enum ActionTypes {

  THIRD = '[mytests] THIRD',
  NEW_ACTION= '[lpactions] NEW_ACTIONS' ,
  ACTIVE_COMPONENT= '[activecomonent] ACTIVE_COMPONENT', 
  LENDER_ID= '[lenderId] LENDER_ID' ,
  REFRESH= '[refresh] REFRESH' 

}

/*
 * Define return types of our actions 
 * Every action returns a type and a payload
 */
export interface NewActionAction { type: ActionTypes.NEW_ACTION, payload: { newaction: newaction} }
export interface ActiveComponentAction { type: ActionTypes.ACTIVE_COMPONENT, 
  payload: { currentcomponent: activecomponent} }
export interface LenderIdAction { type: ActionTypes.LENDER_ID, 
    payload: { lenderId: lenderId} }
    export interface RefreshAction { type: ActionTypes.REFRESH, 
      payload: { refreshScreen: refresh} }
  
/*
 * Define our actions creators
 * We are returning the right Action for each function
 */

export function activeComponent(componentName: string, actionType: string): ActiveComponentAction {

    return { type: ActionTypes.ACTIVE_COMPONENT, payload: { 
      currentcomponent:
      {
       id: nextId3++,
       actiontype: actionType,
       component: componentName
     
       } 
      }
}}
// dodaj ovo lenderid: string, productid: string, lmiid: string
export function NewAction(actionType: string, componentName: string): NewActionAction {
 
  return { type: ActionTypes.NEW_ACTION, payload: { 
 newaction:
 {
  id: nextId++,
  actiontype: actionType,
  component: componentName

  }
}}} 
export function Refresh(isDone: boolean, componentName: string): RefreshAction {
 
  return { type: ActionTypes.REFRESH, payload: { 
 refreshScreen:
 {
  id: nextRefresh++,
  refresh: isDone,
  

  }
}}} 
export function LenderID(uLenderId: string): LenderIdAction {
 
  return { type: ActionTypes.LENDER_ID, payload: { 
 lenderId:
 {
  id: nextId4++,
  lenderId: uLenderId

  }
}}} 
export type Action = NewActionAction |ActiveComponentAction | LenderIdAction | RefreshAction