import styled from "styled-components";


export const HistoryContainer = styled.main`
  flex: 1;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-inline: 4rem;

  margin-top: 5rem;

  h1 {
    width: 100%;
    text-align: left;

    margin-bottom: 3.2rem;
  }
`


export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 160%;

      text-align: left;

      color: ${(props)=>props.theme["gray-100"]};

      background: ${(props)=>props.theme["gray-600"]};
      border: none;
    

      padding: 1.6rem;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 2.4rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 2.4rem;
      }
    }

    td {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 160%;

      color: ${(props)=>props.theme["gray-300"]};

      padding: 1.6rem;

      background: ${(props)=>props.theme["gray-700"]};
      border-top: 4px solid ${(props)=>props.theme["gray-800"]};

      &:first-child {
        padding-left: 2.4rem;
        width: 50%;
      }

      &:last-child {
        padding-right: 2.4rem;
      }

      span {
        display: flex;
        justify-content: left;
        text-align: left;
      }

    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500'
} as const

// interface StatusProps {
//   statusColor: 'yellow' | 'red' | 'green';
// }

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const StatusContainer = styled.span<StatusProps>`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  align-items: center;

  &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;

    background: ${(props)=>props.theme[STATUS_COLORS[props.statusColor]]};
  }

`
