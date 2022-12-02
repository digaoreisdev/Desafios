import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["white-100"]};
  padding: 2rem 10rem 2rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  height: 104px;
  max-Width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 820px; */
  
  background: gray;
`

export const consultCartButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  
  width: 38px;
  height: 38px;
  margin: 33px 160px 33px 1242px;
  
  border: none;
  background: ${props => props.theme["yellow-200"]};
  cursor: pointer;
`