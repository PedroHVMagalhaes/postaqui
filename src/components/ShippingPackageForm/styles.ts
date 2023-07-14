import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  background-color: #E1E1E1;
  margin: auto;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    div{
      margin: 5px
    }

    h2{
      text-align: center;
    }


    button{
      width: 10rem;
      border-radius: 15px;
    }
  }
`
export const SwitchDiv = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`
export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;

`
