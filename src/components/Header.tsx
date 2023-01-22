import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: black;
  padding: 8px 8px 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default function Header() {
    return <HeaderWrapper>
        George FE Test
    </HeaderWrapper>
}