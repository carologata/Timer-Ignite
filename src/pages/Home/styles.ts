import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 7.2rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6rem;
    align-items: center;
  }
`

export const BaseButton = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 0.8rem;
  align-items: center;

  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.9rem;

  color: ${(props)=>props.theme["gray-100"]};

  padding-block: 1.7rem;

  border: none;
  border-radius: 8px;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

`

export const StartButton = styled(BaseButton)`
  
  background: ${(props)=>props.theme["green-500"]};

    &:not(:disabled):hover {
      background: ${(props)=>props.theme["green-700"]};
    }
`

export const StopButton = styled(BaseButton)`
  
  background: ${(props)=>props.theme["red-500"]};

    &:not(:disabled):hover {
      background: ${(props)=>props.theme["red-700"]};
    }
`