import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 16rem;
height: 10rem;
border-radius: 1.875rem;
background: var(--orange, #F2994A);
padding: 1rem;

a{
  text-decoration: none;
  color: #000;
}

h2{
  text-align: center;
  margin: 2px;
}

span{
  overflow-wrap: anywhere;
  margin: 2px;
}
`
export const DivData = styled.div`
display: flex;
width: 1rem;
margin: 4px;
`
