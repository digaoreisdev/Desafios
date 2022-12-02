import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1128px;
  margin:0 auto;
  padding:0 1.5rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SelectCity = styled.button`
  box-sizing: border-box;

width: 143px;
  height: 38px;
  font-size: 6px;
  
  justify-content: space-between;
  padding: 8px;
  
  border: 0;
  background: ${props => props.theme["gray-300"]};
  color: ${props => props.theme.white};
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme["gray-600"]};
    transition: all 0.5s ease-in-out;
  }
`