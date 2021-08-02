import styled from 'styled-components'

const HeaderStyled = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: #04091E;
  color: #ffffff;
  user-select: none;
  .headerContainer {
    display: grid;
    grid-template-columns: min-content min-content;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
  }
  h1 {
    font-size: 26px;
    font-weight: 600;
  }
`
const Header = () => {
  return (
    <HeaderStyled>
      <div className="headerContainer wrapper">
        <h1>Notes</h1>
      </div>
    </HeaderStyled>
  )
}

export default Header
