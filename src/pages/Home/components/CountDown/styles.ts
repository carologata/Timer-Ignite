import styled from "styled-components"

export const TimerBox = styled.div`
display: flex;
justify-content: center;
gap: 1.6rem;
align-items: center;

span {
font-family: 'Roboto Mono';
font-weight: 700;
font-size: 16rem;
line-height:12rem;

color: ${(props)=>props.theme["gray-100"]};

padding: 4rem 1.6rem;

background: ${(props)=>props.theme["gray-700"]};
border-radius: 8px;
border: none;
}
`

export const Separator = styled.div`
font-family: 'Roboto Mono';
font-weight: 700;
font-size: 16rem;
line-height:12rem;

color: ${(props)=>props.theme["green-500"]};

display: flex;
justify-content: center;
width: 6rem;
padding: 2rem 1.6rem;

overflow: hidden; 

background: none;
`