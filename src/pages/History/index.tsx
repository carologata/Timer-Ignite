import { useContext } from "react";
import { CycleContext } from "../../contexts/CyclesContext";

import { HistoryContainer, HistoryList, StatusContainer } from "./styles";

import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/esm/locale/pt-BR";

export function History () {

  const { cycles } = useContext(CycleContext)

  return (
    <HistoryContainer>
    <h1>Meu histórico</h1>

    <HistoryList>
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {cycles.map((cycle)=>{
            return (
              <tr key={cycle.id}>
              <td>{cycle.project}</td>
              <td>{cycle.time} minutos</td>
              <td>{formatDistanceToNow(new Date(cycle.startTime), {
                addSuffix: true,
                locale: ptBR
              })}</td>
              <td>
                {cycle.interruptedTime && (<StatusContainer statusColor="red">Interrompido</StatusContainer>)}
                {cycle.finishedTime && (<StatusContainer statusColor="green">Finalizado</StatusContainer>)}
                {(!cycle.finishedTime && !cycle.interruptedTime) && (<StatusContainer statusColor="yellow">Em andamento</StatusContainer>)}
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </HistoryList>

    </HistoryContainer>
  )
}