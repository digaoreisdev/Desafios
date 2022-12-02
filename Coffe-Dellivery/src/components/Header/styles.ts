import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["white-100"]};
  padding: 2rem 10rem 2rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  height: 104px;
  max-Width: 1440px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 820px; */
  
  .logoImg {
    margin: 2.0625rem 40rem 2.0625rem 10rem;
  }
`

export const ActionsNaveBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 143px;
  height: 38px;
  border: 0;
  border-radius: 6px;
  padding: 8px;
  gap: 4px;
  background: ${props => props.theme["gray-200"]};
  
  input {
    border: none;
    background: transparent;
    width: 101px;
    height: 18px;
    
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    color: ${props => props.theme["purple-500"]};
    font-weight: 400;
    font-size: 14px;
    line-height: 18.2px;
  }
`

export const ConsultCartButton = styled.button`
  margin: 2.0625rem 10rem 2.0625rem 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  
  width: 38px;
  height: 38px;
  
  border: none;
  background-color: ${props => props.theme["yellow-200"]};
  cursor: pointer;
  
  &:hover {
    border: 3px solid ${props => props.theme["green-500"]};
  }
`

export const IntroContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 544px;
  margin-top: 104px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    
  }
`