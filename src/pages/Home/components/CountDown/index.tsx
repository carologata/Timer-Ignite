import { useContext, useEffect } from "react";

import { CycleContext } from "../../../../contexts/CyclesContext";

import { differenceInSeconds } from "date-fns";

import { Separator, TimerBox } from "./styles";


export function CountDown() {

  //import CycleContext
  const { activeCycle, cycleActiveId, markCycleAsFinished, passedSeconds, setSeconds} = useContext(CycleContext)


  //Calculate seconds left
  
  const totalSeconds = activeCycle ? activeCycle.time * 60 : 0;
  
  const currentSeconds = totalSeconds - passedSeconds;  

  const minutesAmount =  Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");


  //Start countdown and setPassedSeconds
  useEffect(()=>{

    let interval: number;


    if (activeCycle) {

      interval = setInterval(() => {

        const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startTime))

        if( secondsDifference >= totalSeconds) {

          // //add information of finished time - from CycleContext
            markCycleAsFinished()
            setSeconds(0)
            clearInterval(interval)    

        } else {
          setSeconds(secondsDifference)
          
        }

      }, 1000)
    }

    return ()=>{
      clearInterval(interval)
    }


  },[activeCycle, totalSeconds])


  //Show time running on tab title
  useEffect(()=>{
    if(activeCycle){
      document.title = `${minutes}:${seconds}`
    }
    else{
      document.title = `Ciclo finalizado / interrompido.`
    }
  },[minutes, seconds, activeCycle])


  return (

    <TimerBox>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
        <Separator>:</Separator>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </TimerBox>


  )
}