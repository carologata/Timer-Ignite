import { FormContainer, InputProject, InputTime } from "./styles";

import { useContext } from "react";
import { CycleContext } from "../../../../contexts/CyclesContext";
import { useFormContext } from "react-hook-form";


export function NewCycleForm() {

  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()

  return (
    <FormContainer>

        <label htmlFor="project">Vou trabalhar em</label>
        <InputProject
          type="text"
          id="project"
          placeholder="Dê um nome para o seu projeto" 
          list="inputProjects"
          disabled={!!activeCycle}
          {...register("project")}/>

      <datalist id="inputProjects">
        <option value="Projeto 1"/>
        <option value="Projeto 2"/>
        <option value="Projeto 3"/>
      </datalist>

        <label htmlFor="time">durante</label>
        <InputTime 
          type="number"
          id="time" 
          placeholder="00"
          // step={5}
          min={1}
          max={60}
          disabled={!!activeCycle}
          {...register("time", {valueAsNumber: true})}/>
        <span>minutos.</span>

    </FormContainer>  
  )
}

