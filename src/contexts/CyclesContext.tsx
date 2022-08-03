import { differenceInSeconds } from "date-fns"
import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { CreateNewCycleAction, InterruptCycleAction, MarkCycleAsFinishedAction } from "../reducers/cycles/action"
import { CycleReducer } from "../reducers/cycles/reducer"


//Cycle "Full" Informations
export interface CycleType {
  id: string,
  project: string,
  time: number,
  startTime: Date,
  interruptedTime?: Date,
  finishedTime?: Date
}

//New Cycle Informations
interface NewCycleTypeProps {
  project: string,
  time: number
}

//
interface CycleContextType {
  activeCycle: CycleType | undefined,
  cycleActiveId: string | null,
  passedSeconds: number
  cycles: CycleType[]
  markCycleAsFinished: () => void
  setSeconds: (seconds: number) => void
  createNewCycle: (data: NewCycleTypeProps) => void
  interruptCycle: () => void
}

//
export const CycleContext = createContext({ } as CycleContextType)

//Children Type
interface CycleChildrenProps {
  children: ReactNode
}


//CyclesContextProvider cover info for Home and History pages
export function CyclesContextProvider({children}:CycleChildrenProps) {

  

  // REDUCER
  // const [cycleState, dispatch] = useReducer((state, action)=>{},[])
  //state é o valor atual da cycleState e a action é a ação para atualizar o valor da state
  //[] inserir o valores que inicia a cycleState
  const [cycleState, dispatch] = useReducer(
    CycleReducer, 
    {
      cycles: [],
      cycleActiveId: null,
    }, ()=>{

      const storedStateJSON = localStorage.getItem("@ignite-timer:cycle-state-0.0.1")

      if(storedStateJSON){
        return JSON.parse(storedStateJSON)
      }

      return {
        cycles: [],
        cycleActiveId: null
      }
      
    }
    )
  

const { cycles, cycleActiveId } = cycleState;
    
useEffect(()=>{

  const stateJSON = JSON.stringify(cycleState)
    
  localStorage.setItem("@ignite-timer:cycle-state-0.0.1", stateJSON)
    
}, [cycleState])


//Find activeCycle through ID
const activeCycle = cycles.find((cycle)=> cycle.id === cycleActiveId);


function setSeconds(seconds:number) {
  setPassedSeconds(seconds)
}


// const [cycleActiveId, setCycleActiveId] = useState< string | null >(null) 
const [passedSeconds, setPassedSeconds] = useState(()=>{

    if(activeCycle){
      return differenceInSeconds(new Date(), new Date(activeCycle.startTime))
    }
   
    return 0
})
  


//Create NEW CYCLE
//Data from handleSubmit(handleNewCycle) - handleSubmit from react-hook-from gives data
function createNewCycle(data: NewCycleTypeProps) {
    
  const id = String(new Date().getTime())

  const newCycle: CycleType = {
    id,
    project: data.project,
    time: data.time,
    startTime: new Date()
  }

  // setCycles((state) => [...state, newCycle]);

  // setCycleActiveId(newCycle.id);

  // dispatch({
  //   type: "CREATE_NEW_CYCLE",
  //   payload: {
  //     newCycle
  //   },
  // })

  dispatch(CreateNewCycleAction(newCycle))

  setPassedSeconds(0);

}


//Interrupt CYCLE
//Function to interrupt cycle
function interruptCycle() {

  //add information of interrupted time
  
  // dispatch({
  //   type: "INTERRUPT_CYCLE",
  // })

  dispatch(InterruptCycleAction())
  
  // setCycles((state) => state.map((cycle)=> {
  //   if (cycle.id === cycleActiveId) {
  //     return {...cycle, interruptedTime: new Date() }
  //   } else {
  //     return cycle
  //   } 
  // }))

  //Setting cycle active ID as null, it returns activeCycle as undefined, therefore useEffect return to clearInterval
  // setCycleActiveId(null)

   setPassedSeconds(0)
}


//Mark CYCLE with finished time 
function markCycleAsFinished() {

  // dispatch({
  //   type: "MARK_CYCLE_AS_FINISHED",
  // }) 

  dispatch(MarkCycleAsFinishedAction())

//add information of finished time 
  // setCycles((state) => state.map((cycle)=> {
  //   if (cycle.id === cycleActiveId) {
  //     return {...cycle, finishedTime: new Date() }
  //   } else {
  //     return cycle
  //   } 
  // }))
}


return (
  
  <CycleContext.Provider
  value={{
    activeCycle,
    cycleActiveId,
    createNewCycle,
    interruptCycle,
    markCycleAsFinished,
    passedSeconds,
    setSeconds,
    cycles
  }}>
    {children}
  </CycleContext.Provider>

)
  
}