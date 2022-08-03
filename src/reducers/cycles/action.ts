import { CycleType } from "../../contexts/CyclesContext"


export enum ActionTypes {
  CREATE_NEW_CYCLE = "CREATE_NEW_CYCLE",
  INTERRUPT_CYCLE = "INTERRUPT_CYCLE",
  MARK_CYCLE_AS_FINISHED = "MARK_CYCLE_AS_FINISHED"
}

export function CreateNewCycleAction(newCycle: CycleType) {
  return {
    type: "CREATE_NEW_CYCLE",
    payload: {
      newCycle
    }
  }
}

export function InterruptCycleAction () {
  return {
    type: "INTERRUPT_CYCLE"
  }
}

export function MarkCycleAsFinishedAction () {
  return {
    type: "MARK_CYCLE_AS_FINISHED"
  }
}