import styled from "styled-components"

export const FormContainer = styled.div`
  
width: 100%;

display: flex;
justify-content: center;
gap: 0.8rem;
align-items: center;

flex-wrap: wrap;

label {
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 160%;
  
  color: ${(props)=>props.theme["gray-100"]};

  padding-block: 0.8rem;
}

span {
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 160%;
  
  color: ${(props)=>props.theme["gray-100"]};

  padding: 0.4rem;
}
`

const BaseInput = styled.input`
font-weight: 700;
font-size: 1.8rem;
line-height: 100%;
color: ${(props)=>props.theme["gray-100"]};

text-align: center; 

padding-block: 0.8rem;
border: none;
background: none;

border-bottom: 2px solid ${(props)=>props.theme["gray-500"]};

&:focus {
  box-shadow: none;
  border-color: ${(props)=>props.theme["green-500"]}
}

&::placeholder {
  color: ${(props)=>props.theme["gray-500"]};
}
`

export const InputProject = styled(BaseInput)`
flex: 1;

&::-webkit-calendar-picker-indicator {
  display: none !important;
}
`

export const InputTime = styled(BaseInput)`
width: 6rem;
`