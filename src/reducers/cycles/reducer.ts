import { CycleType } from "../../contexts/CyclesContext"
import { ActionTypes } from "./action"

import produce from "immer"

interface CycleStateProps {
  cycles: CycleType[],
  cycleActiveId: string | null,
}

export function CycleReducer (state: CycleStateProps, action: any) {
    
  switch(action.type) {
    case ActionTypes.CREATE_NEW_CYCLE:
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.newCycle],
      //   cycleActiveId: action.payload.newCycle.id,
      // }
      return produce(state, draft => {
        draft.cycles.push(action.payload.newCycle)
        draft.cycleActiveId = action.payload.newCycle.id
      })
    
    case ActionTypes.INTERRUPT_CYCLE: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle)=> {
      //     if (cycle.id === state.cycleActiveId) {
      //       return {...cycle, interruptedTime: new Date() }
      //     } else {
      //       return cycle
      //     } 
      //   }),
      //   cycleActiveId: null,
      // }

      const currentCycleIndex = state.cycles.findIndex((cycle)=>{
        return cycle.id === state.cycleActiveId
      })

      if (currentCycleIndex < 0) {
        return state
      } 

      return produce(state, (draft)=>{
        draft.cycles[currentCycleIndex].interruptedTime = new Date()
        draft.cycleActiveId = null
      })

      
    }

    case ActionTypes.MARK_CYCLE_AS_FINISHED: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle)=> {
      //     if (cycle.id === state.cycleActiveId) {
      //       return {...cycle, finishedTime: new Date() }
      //     } else {
      //       return cycle
      //     } 
      //   }),
      //   cycleActiveId: null,
      // }
      const currentCycleIndex = state.cycles.findIndex((cycle)=>{
        return cycle.id === state.cycleActiveId
      })

      if (currentCycleIndex < 0) {
        return state
      } 

      return produce(state,( draft)=>{
        draft.cycles[currentCycleIndex].finishedTime = new Date()
        draft.cycleActiveId = null
      })
    }

    default: 
      return state
  }
  
}