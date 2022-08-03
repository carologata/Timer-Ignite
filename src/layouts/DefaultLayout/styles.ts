import styled from "styled-components";


export const LayoutContainer = styled.div`
  max-width: 112rem;
  height: calc(100vh - 16rem);

  margin: 8rem auto;
  padding: 4rem;

  background: ${(props) => props.theme["gray-800"]};

  display: flex;
  flex-direction: column;
  align-items: center;
`