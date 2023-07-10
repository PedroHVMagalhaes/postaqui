import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  margin-top: 8rem;

  form{
    width: 100%;
    padding: 2rem;
    max-width: fit-content;
    background-color: #E1E1E1;

    div{
      margin: 5px
    }

    h2{
      text-align: center;
      margin-bottom: 1rem;
    }

    input{
      background-color: #FFF;
      border: 1px solid;
      border-color: #CCC;
      display: flex;
    }
    button{
      width: 10rem;
      border-radius: 15px;
    }
  }
`
