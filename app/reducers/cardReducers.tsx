import {Product , Action}from '../types/card'
export function  cardReducer(state : Product[] ,action:Action):Product[] {
   switch(action.type){
   case'add':
   return [...state , action.payload ]
   case'delete':
   return state.filter(product => product.id !== action.payload)
   default:
    return state;
   };
}