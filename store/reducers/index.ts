import { combineReducers } from "redux";
import { playerReducer } from "./player-reducer";
import { HYDRATE } from "next-redux-wrapper";

export const rootReducer = combineReducers({
    player: playerReducer
})

export const reducer = (state:any,action:any)=>{
    if(action.type===HYDRATE){
        const nextState={
            ...state,
            ...action.payload
        }
        if(state.count) nextState.count = state.count
        return nextState
    }
    else{
        return rootReducer(state,action)
    }
}

export type RootState = ReturnType<typeof rootReducer>