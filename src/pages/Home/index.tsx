import { useContext, useState } from "react";
import { CycleContext } from "../../contexts/CyclesContext";
import { FormProvider, useForm } from "react-hook-form";

import { HandPalm, Play } from "phosphor-react";

import { HomeContainer, StartButton, StopButton } from "./styles";

import { NewCycleForm } from "./components/NewCycleForm";
import { CountDown } from "./components/CountDown";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";



//ZOD VALIDATION SCHEMA
const newCycleFormValidationSchema = zod.object({
  project: zod.string().min(1,"Informe a tarefa"),
  time: zod.number().min(1).max(60),
})

type NewCycleType = zod.infer<typeof newCycleFormValidationSchema>

// OR

// interface NewCycleType {
//   project: string,
//   time: number
// }


export function Home() {

  //import CycleContext
  const { createNewCycle, interruptCycle, activeCycle } = useContext(CycleContext)

  //ZOD VALIDATION SCHEMA USED INSIDE USEFORM USING RESOLVER 
  const newCycleForm = useForm<NewCycleType>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      project: "",
      time: 0,
    }
  });

  const { handleSubmit, watch, reset } = newCycleForm


  //Block or allow button to start
  const isThereProject = watch("project");
  const isSubmitDisable = !isThereProject

  function handleCreateNewCycle(data: NewCycleType) {

    createNewCycle(data)

    reset();
  }

  return (
    <HomeContainer>

    <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
      
  
        <FormProvider {...newCycleForm}>
          <NewCycleForm/>
        </FormProvider>
          <CountDown/>

      
      {activeCycle 
        ? 
        <StopButton 
          onClick={interruptCycle}
          type="button">
            <HandPalm size={24} />
            Interromper
        </StopButton>
        :
        <StartButton 
          disabled={isSubmitDisable} 
          type="submit">
            <Play size={24} />
            Começar
        </StartButton>
      }  

    </form>

    </HomeContainer>
  )
}